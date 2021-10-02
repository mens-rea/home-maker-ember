import Route from '@ember/routing/route';

export default class IngredientRoute extends Route {
  model(params) {
    return this.store.findRecord('ingredient', params.ingredient_id);
  }
}
