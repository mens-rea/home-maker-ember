import Route from '@ember/routing/route';

export default class BillsRoute extends Route {
  model() {
    return this.store.findAll('menu');
  }
}
