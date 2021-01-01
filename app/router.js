import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('recipes');
  this.route('recipe', {
    path: 'recipes/:recipe_id'
  });
  this.route('bills');
  this.route('bill', {
    path: 'bills/:bill_id'
  });
});
