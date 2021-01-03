import Model, {attr} from '@ember-data/model';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default class BillModel extends Model {
  @attr title;
  @attr description;
  @attr('number') amount;
  @attr('date') datePaid;

  @computed('datePaid')
  get isPaid() {
    return !isEmpty(this.datePaid);
  }
}
