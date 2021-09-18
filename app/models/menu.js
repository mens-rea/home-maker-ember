import Model, {attr} from '@ember-data/model';

export default class MenuModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('array') recipes;

  deleteMenu(id) {
    let recipe = store.peekRecord('menu', id);
    recipe.deleteRecord();
    recipe.save(); // => DELETE to /posts/1
  }
}
