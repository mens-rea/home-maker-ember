import Route from '@ember/routing/route';

export default class RecipesRoute extends Route {
  model() {
    let model = this.store.peekAll('recipe');
    console.log(model);

    if (model.length == 0) {
      console.log("first load");
      return this.store.findAll('recipe');
    }
    console.log("already here");
    return model;
  }
}
