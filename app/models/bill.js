import Model, {attr} from '@ember-data/model';

export default class BillModel extends Model {
  @attr title;
  @attr description;
  @attr amount;
}
