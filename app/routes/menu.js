import Route from '@ember/routing/route';

export default class MenuRoute extends Route {
  model(params) {
    return this.store.findRecord('menu', params.menu_id);
  }
}
