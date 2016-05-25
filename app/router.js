import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('unresolved');
  this.route('resolved');
  this.route('rejected');
  this.route('htmlbars-example');
  this.route('farhad-demo');

  this.route('github', function() {
    this.route('users', function() {
      this.route('show', { path: ':username' });
    });
  });
  this.route('action-demos');
});

export default Router;
