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

  @tracked ingredients = A([]);

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

  @action
  async generateGroceryList() {
    alert('groceryListGenerated');

    if (this.recipes) {
      let ingredientList = [];
      for (const recipe of this.recipes) {
        if (recipe.ingredients) {
          for (const id of recipe.ingredients) {
            let ingredient = await this.store.peekRecord('ingredient', id);
      
            if (!ingredient) {
              ingredient = await this.store.findRecord('ingredient', id);
            }
            ingredientList.push(ingredient);
          }
        }
      }
      this.ingredients = ingredientList;
      // for (const item of ingredientList) {
      //   console.log(item.title);
      // }
    }
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

  // remove grocery list item
  @action
  async removeGroceryItem(id) {
    // remove from the ui list
    let list = this.ingredients;
    list.splice(id, 1);
    this.ingredients = list;
  }
}
