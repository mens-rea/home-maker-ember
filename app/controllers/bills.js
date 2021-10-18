import Controller from '@ember/controller';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';

export default class BillsController extends Controller {
  @service
  modalsManager;
  
  @action
  showModalWithForm() {
    // return this.modalsManager
    //   .show('modal-with-form', {
    //     isBill: true,
    //     title: 'Add Bill',
    //     saveTitle: 'Save'})
    //   .then(formValues => {
    //     this.store.createRecord('bill', {
    //       title: formValues.title,
    //       description: formValues.description,
    //       amount: formValues.amount,
    //       datePaid: formValues.datePaid,
    //     }).save();
    //     // form is submitted
    //     // here `formValues` is an object with values from inputs
    //   })
    //   .catch(() => {
    //     // modal is closed without submit
    //   });
  }
}
