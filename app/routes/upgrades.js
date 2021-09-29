import Route from '@ember/routing/route';

export default class UpgradesRoute extends Route {
  model() {
    let model = this.store.peekAll('upgrade');
    console.log(model);

    if (model.length == 0) {
      console.log("first load");
      return this.store.findAll('upgrade');
    }
    console.log("already here");
    return model;
  }
}
