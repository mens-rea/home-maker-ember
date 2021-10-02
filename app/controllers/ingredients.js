import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class IngredientsController extends Controller {
  @service
  modalsManager;
  
  @action
  showModalWithForm() {
    return this.modalsManager
      .show('modal-with-form', {title: 'Add Ingredient', saveTitle: 'Save'})
      .then(formValues => {
        this.store.createRecord('ingredient', {
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
