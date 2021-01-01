import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class CardComponent extends Component {
  @service
  store

  @service
  modalsManager;

  @action
  deleteRecipe(id) {
    let recipe = this.store.peekRecord('recipe', id);
    recipe.deleteRecord();
    recipe.save(); // => DELETE to /posts/1
  }

  @action
  editRecipe(recipe) {
    return this.modalsManager
      .show('modal-with-form', {recipe: recipe, title: 'Edit Recipe', saveTitle: 'Update'})
      .then(formValues => {
        this.store.findRecord('recipe', recipe.id).then(function(current) {
          current = recipe;
          current.save(); // => PATCH to '/posts/1'
        });
      })
      .catch(() => {
        // modal is closed without submit
      });
  }
}
