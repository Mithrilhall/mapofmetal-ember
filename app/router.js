import EmberRouter from '@ember/routing/router';
import config from 'mapofmetal-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('map');
  this.route('properties', function() {
    this.route('property', { path: ':path' }, function () {
    });
  });
});
