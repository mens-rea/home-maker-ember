import Route from '@ember/routing/route';

export default class RecipeRoute extends Route {
  async model(params) {
    let recipe = await this.store.findRecord('recipe', params.recipe_id);

    return {
      recipe_id: params.recipe_id,
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients,
    }
  }
}