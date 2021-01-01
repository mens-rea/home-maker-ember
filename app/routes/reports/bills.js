import Route from '@ember/routing/route';

export default class ReportsBillsRoute extends Route {
  model() {
    return this.store.findAll('bill');
  }
}
