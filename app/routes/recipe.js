import Route from '@ember/routing/route';

export default class PostRoute extends Route {
  model(params) {
    return this.store.findRecord('recipe', params.recipe_id);
  }
}