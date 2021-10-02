import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { A } from '@ember/array';
import { task } from 'ember-concurrency';

export default class SubItemListComponent extends Component {
  @service 
  store;
  
  @service
  modalsManager;

  @tracked 
  ingredientList = A([]);

  @tracked 
  allIngredients = A([]);

  @tracked 
  ingredients = this.args.recipeModel.ingredients;

  @tracked 
  recipeModel = this.args.recipeModel;

  @tracked
  list = A([]);

  constructor() {
    super(...arguments);

    this.showIngredients.perform();
  }

  @(task(function * () {
    let ingredientList = [];
    console.log(this.ingredients);

    if (this.ingredients) {
      for (const ingredient of this.ingredients) {
        let rec = yield this.store.peekRecord('ingredient', ingredient);
  
        if (!rec) {
          rec = yield this.store.findRecord('ingredient', ingredient);
          console.log("record doesn't exist yet");
        }
        ingredientList.push(rec);
      }
    }
    
    this.list = ingredientList;
  })) showIngredients;

  // load all recipes available so we can add more
  @action
  async addIngredients() {
    this.allIngredients = await this.store.findAll('ingredient');
  }

  // add a specific recipe to the menu
  @action
  async addItem(ingredient) {
    let newList = this.list;
    
    if (!this.args.recipeModel.ingredients) {
      this.recipeModel.ingredients = [];
    }
    this.recipeModel.ingredients.push(ingredient.id);

    let rec = await this.store.peekRecord('ingredient', ingredient.id);
    newList.push(rec);

    this.list = newList;
    this.recipeModel.save();
  }

  // remove a specific recipe from the menu
  @action
  async removeItem(id) {
    // remove from the ui list
    let newList = this.list;
    newList.splice(id, 1);
    this.list = newList;

    // remove from the database
    this.recipeModel.ingredients.splice(id, 1);
    this.recipeModel.save();
  }
}
