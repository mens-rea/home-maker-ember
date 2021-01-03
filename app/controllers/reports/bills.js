import Controller from '@ember/controller';
import { computed, action } from '@ember/object';

export default class ReportsBillsController extends Controller {
  @computed('model')
  get totalBills() {
    return this.model.mapBy('amount').reduce((a, b) => a + b, 0);
  }

  @action
  printReport() {
    window.print();
  }
}
