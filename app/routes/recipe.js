import Route from '@ember/routing/route';

export default class RecipeRoute extends Route {
  async model(params) {
    return this.store.findRecord('recipe', params.recipe_id);
  }
}