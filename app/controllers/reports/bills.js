import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sum } from '@ember/object/computed';

export default class ReportsBillsController extends Controller {
  @computed('model')
  get totalBills() {
    return this.model.mapBy('amount').reduce((a, b) => a + b, 0);
  }
}
