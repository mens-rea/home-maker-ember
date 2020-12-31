import BaseModal from './ebmm-modals-container/base';
import { validator, buildValidations } from 'ember-cp-validations';
import EmberObject, { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default class ModalWithFormComponent extends BaseModal {
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
}
