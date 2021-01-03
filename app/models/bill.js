import Model, {attr} from '@ember-data/model';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default class BillModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('number') amount;
  @attr('date', {
    defaultValue() { return new Date(); }
  }) datePaid;

  @computed('datePaid')
  get isPaid() {
    return !isEmpty(this.datePaid);
  }
}
