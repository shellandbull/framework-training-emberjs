import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('unresolved');
  this.route('resolved');
  this.route('rejected');
});

export default Router;
