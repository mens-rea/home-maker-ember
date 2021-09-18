import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

export default class MenuController extends Controller {
  @service
  modalsManager;

  @tracked recipes = A([]);

  @action
  async showRecipes() {
    let recipeList = [];
    console.log(this.recipes);

    for (const recipe of this.model.recipes) {
      let rec = await this.store.findRecord('recipe', recipe);
      recipeList.push(rec);
    }
    
    this.recipes = recipeList;
    console.log(this.recipes);
  } 
}
