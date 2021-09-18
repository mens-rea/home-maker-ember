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
  }

  // load all recipes available so we can add more
  @action
  async addRecipes() {
    this.allRecipes = await this.store.findAll('recipe');
  }

  @action
  async addRecipe(recipe) {
    this.model.recipes.push(recipe.id);
    let newList = this.recipes;

    let rec = await this.store.peekRecord('recipe', recipe.id);
    newList.push(rec);

    this.recipes = newList;
    this.model.save();
  }
}
