import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class MenusController extends Controller {
  @service
  modalsManager;
  
  @action
  showModalWithForm() {
    return this.modalsManager
      .show('modal-with-form', {title: 'Add Menu', saveTitle: 'Save'})
      .then(formValues => {
        this.store.createRecord('menu', {
          title: formValues.title,
          description: formValues.description,
          recipes: ['-MQ7zUSGIuSOa10X_H9r', '-MjqyWP6sxzW1Wva4z-6'],
        }).save();
        // form is submitted
        // here `formValues` is an object with values from inputs
      })
      .catch(() => {
        // modal is closed without submit
      });
  }
}
