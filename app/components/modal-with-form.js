import BaseModal from './ebmm-modals-container/base';
import { validator, buildValidations } from 'ember-cp-validations';
import EmberObject, { computed } from '@ember/object';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import {inject as service} from '@ember/service';

export default class ModalWithFormComponent extends BaseModal {
  @service
  store

  @computed()
  get formData () {
    const Validations = buildValidations({
      title: validator('presence', true),
      description: validator('presence', true),
    });
    return EmberObject
      .extend(Validations, {})
      .create(getOwner(this).ownerInjection());
  }

  @action
  changeDate(date, item) {
    if (item.id) {
      this.store.findRecord('bill', item.id).then(function(current) {
        current.datePaid = new Date(date);
        console.log(current.datePaid);
        current.save(); // => PATCH to '/posts/1'
      });
    }
  }
}
