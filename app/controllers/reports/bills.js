import Controller from '@ember/controller';
import { computed, action } from '@ember/object';

export default class ReportsBillsController extends Controller {
  isUnpaidShown = false;

  @computed('model', 'isUnpaidShown')
  get totalBills() {
    if (this.isUnpaidShown){
      return this.model.mapBy('amount').reduce((a, b) => a + b, 0);
    }

    return this.model.filterBy('isPaid', true).mapBy('amount').reduce((a, b) => a + b, 0);
  }

  @action
  printReport() {
    window.print();
  }

  @action
  toggleUnpaid() {
    this.toggleProperty('isUnpaidShown');
  }
}
