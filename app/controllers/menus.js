import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class MenusController extends Controller {
  @service
  modalsManager;

  @action
  async showRecipes() {
    let recipe = await this.store.findRecord('recipe', '-MQ7zUSGIuSOa10X_H9r');
    alert(recipe.title);
  }
  
  @action
  showModalWithForm() {
    return this.modalsManager
      .show('modal-with-form', {title: 'Add Menu', saveTitle: 'Save'})
      .then(formValues => {
        this.store.createRecord('menu', {
          title: formValues.title,
          description: formValues.description,
        }).save();
        // form is submitted
        // here `formValues` is an object with values from inputs
      })
      .catch(() => {
        // modal is closed without submit
      });
  }
}
