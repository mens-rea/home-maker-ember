import Model, {attr} from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr title;
  @attr description;

  deleteRecipe(id) {
    let recipe = store.peekRecord('recipe', id);
    recipe.deleteRecord();
    recipe.save(); // => DELETE to /posts/1
  }
}
