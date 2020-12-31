import Route from '@ember/routing/route';

export default class RecipesRoute extends Route {
  model() {
    return this.store.findAll('recipe');
  }
}
