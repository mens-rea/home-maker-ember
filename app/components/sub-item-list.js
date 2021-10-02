import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class SubItemListComponent extends Component {
  @service store;

  @tracked ingredients = this.args.recipeModel.ingredients;
  @tracked list;

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
    console.log(this.recipes);
  })) showIngredients;
}
