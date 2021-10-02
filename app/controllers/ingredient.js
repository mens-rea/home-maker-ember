import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class IngredientController extends Controller {
  @service
  modalsManager;

  @tracked ingredients = A([]);
  @tracked allIngredients = A([]);

  @action
  async showIngredients() {
    let ingredientList = [];
    console.log(this.ingredients);

    if (this.model.ingredients) {
      for (const ingredient of this.model.ingredients) {
        let rec = await this.store.peekRecord('ingredient', ingredient);
  
        if (!rec) {
          rec = await this.store.findRecord('ingredient', ingredient);
          console.log("record doesn't exist yet");
        }
        ingredientList.push(rec);
      }
    }
    
    this.ingredients = ingredientList;
    console.log(this.recipes);
  }

  // load all recipes available so we can add more
  @action
  async addRecipes() {
    this.allRecipes = await this.store.findAll('recipe');
  }

  // add a specific recipe to the menu
  @action
  async addRecipe(recipe) {
    let newList = this.recipes;
    
    if (!this.model.recipes) {
      this.model.recipes = [];
    }
    this.model.recipes.push(recipe.id);

    let rec = await this.store.peekRecord('recipe', recipe.id);
    newList.push(rec);

    this.recipes = newList;
    this.model.save();
  }

  // remove a specific recipe from the menu
  @action
  async removeRecipe(id) {
    // remove from the ui list
    let newList = this.recipes;
    newList.splice(id, 1);
    this.recipes = newList;

    // remove from the database
    this.model.recipes.splice(id, 1);
    this.model.save();
  }
}
