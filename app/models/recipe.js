import Model, {attr} from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr() ingredients;

  deleteRecipe(id) {
    let recipe = store.peekRecord('recipe', id);
    recipe.deleteRecord();
    recipe.save(); // => DELETE to /posts/1
  }
}
