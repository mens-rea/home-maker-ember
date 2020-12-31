import Model, {attr} from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr title;
  @attr description;
}
