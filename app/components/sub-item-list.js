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
  allItems = A([]);

  @tracked 
  ingredients = this.args.parentModel.ingredients;

  @tracked 
  parentModel = this.args.parentModel;

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
  async addItems() {
    this.allItems = await this.store.findAll('ingredient');
  }

  // add a specific recipe to the menu
  @action
  async addItem(item) {
    // add to ui list
    let newList = this.list;
    newList.push(item);
    this.list = newList;

    // add to database
    if (!this.args.parentModel.ingredients) {
      this.parentModel.ingredients = [];
    }
    this.parentModel.ingredients.push(item.id);
    this.parentModel.save();
  }

  // remove a specific recipe from the menu
  @action
  async removeItem(id) {
    // remove from the ui list
    let newList = this.list;
    newList.splice(id, 1);
    this.list = newList;

    // remove from the database
    this.parentModel.ingredients.splice(id, 1);
    this.parentModel.save();
  }
}
