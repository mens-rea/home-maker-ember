import Model, {attr} from '@ember-data/model';

export default class IngredientModel extends Model {
  @attr('string') title;
  @attr('string') description;

  deleteIngredient(id) {
    let ingredient = store.peekRecord('ingredient', id);
    ingredient.deleteRecord();
    ingredient.save(); // => DELETE to /ingredient/1
  }
}
