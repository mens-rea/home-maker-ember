import Route from '@ember/routing/route';

export default class RecipesRoute extends Route {
  model() {
    return [{
      title: 'Adobo',
      description: 'A classic Filipino Dish, with a soy sauce base',
    }, {
      title: 'Sinigang',
      description: 'A classic Filipino Dish, with a sour soup base',
    }, {
      title: 'Ginataan',
      description: 'A classic Filipino Dish, with a coconut extract base',
    }];
  }
}
