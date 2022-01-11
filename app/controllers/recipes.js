import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class RecipesController extends Controller {
  @service
  modalsManager;
  
  @action
  showModalWithForm() {
    return this.modalsManager
      .show('modal-with-form', {title: 'Add Recipe', saveTitle: 'Save'})
      .then(formValues => {
        this.store.createRecord('recipe', {
          title: formValues.title,
          description: formValues.description,
          ingredients: [],
        }).save();
        // form is submitted
        // here `formValues` is an object with values from inputs
      })
      .catch(() => {
        // modal is closed without submit
      });
  }
}
