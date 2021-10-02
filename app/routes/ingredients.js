import Route from '@ember/routing/route';

export default class IngredientsRoute extends Route {
  model() {
    let model = this.store.peekAll('ingredient');
    console.log(model);

    if (model.length == 0) {
      console.log("first load");
      return this.store.findAll('ingredient');
    }
    console.log("already here");
    return model;
  }
}
