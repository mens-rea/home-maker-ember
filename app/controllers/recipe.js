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
  async addIngredients() {
    this.allIngredients = await this.store.findAll('ingredient');
  }

  // add a specific recipe to the menu
  @action
  async addIngredient(ingredient) {
    let newList = this.ingredients;
    
    if (!this.model.ingredients) {
      this.model.ingredients = [];
    }
    this.model.ingredients.push(ingredient.id);

    let rec = await this.store.peekRecord('ingredient', ingredient.id);
    newList.push(rec);

    this.ingredients = newList;
    this.model.save();
  }

  // remove a specific recipe from the menu
  @action
  async removeIngredient(id) {
    // remove from the ui list
    let newList = this.ingredients;
    newList.splice(id, 1);
    this.ingredients = newList;

    // remove from the database
    this.model.ingredients.splice(id, 1);
    this.model.save();
  }
}
