import Model, {attr} from '@ember-data/model';

export default class UpgradeModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('number') price;

  deleteMenu(id) {
    let recipe = store.peekRecord('upgrade', id);
    recipe.deleteRecord();
    recipe.save(); // => DELETE to /posts/1
  }
}
