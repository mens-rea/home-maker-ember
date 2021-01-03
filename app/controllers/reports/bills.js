import Controller from '@ember/controller';
import { computed, action } from '@ember/object';

export default class ReportsBillsController extends Controller {
  @computed()
  get totalBills() {
    return this.model.filterBy('isPaid', true).mapBy('amount').reduce((a, b) => a + b, 0);
  }

  @action
  printReport() {
    window.print();
  }
}
