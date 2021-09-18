import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class MenuController extends Controller {
  @service
  modalsManager;

  @tracked recipes = A([]);
  @tracked allRecipes = A([]);

  @action
  async showRecipes() {
    let recipeList = [];
    console.log(this.recipes);

    if (this.model.recipes) {
      for (const recipe of this.model.recipes) {
        let rec = await this.store.peekRecord('recipe', recipe);
  
        if (!rec) {
          rec = await this.store.findRecord('recipe', recipe);
          console.log("record doesn't exist yet");
        }
        recipeList.push(rec);
      }
    }
    
    this.recipes = recipeList;
    console.log(this.recipes);

    // load all recipes available so we can add more
    this.allRecipes = await this.store.peekAll('recipe');

    if (this.allRecipes.length == 0) {
      console.log('does not exist yet');
      this.allRecipes = await this.store.findAll('recipe');
    }
  }

  @action
  async addRecipe(recipe) {
    let newList = this.recipes;

    let rec = await this.store.peekRecord('recipe', recipe.id);
    newList.push(rec);

    this.recipes = newList;
    this.model.recipes = newList;
    this.model.save();
  }
}
