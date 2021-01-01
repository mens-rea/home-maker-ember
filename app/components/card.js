import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class CardComponent extends Component {
  @service
  store

  @action
  deleteRecipe(id) {
    let recipe = this.store.peekRecord('recipe', id);
    recipe.deleteRecord();
    recipe.save(); // => DELETE to /posts/1
  }
}
