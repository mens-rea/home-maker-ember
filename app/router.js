import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('menus', {
    path: '/'
  });
  this.route('recipes');
  this.route('recipe', {
    path: 'recipes/:recipe_id'
  });
  this.route('bills');
  this.route('bill', {
    path: 'bills/:bill_id'
  });
  this.route('upgrades');
  this.route('upgrades', {
    path: 'upgrades/:upgrade_id'
  });
  this.route('menus');
  this.route('menu', {
    path: 'menus/:menu_id'
  });
  this.route('ingredients');
  this.route('ingredient', {
    path: 'ingredients/:ingredient_id'
  });

  this.route('reports', function() {
    this.route('bills');
  });
});
