import Route from '@ember/routing/route';

export default class MenusRoute extends Route {
  model() {
    return this.store.findAll('menu');
  }
}
