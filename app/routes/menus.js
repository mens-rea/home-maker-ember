import Route from '@ember/routing/route';

export default class MenusRoute extends Route {
  model() {
    let model = this.store.peekAll('menu');
    console.log(model);

    if (model.length == 0) {
      console.log("first load");
      return this.store.findAll('menu');
    }
    console.log("already here");
    return model;
  }
}
