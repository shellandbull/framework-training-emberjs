import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Route.extend({
  model(params) {
    console.log(`MODEL HOOK EXECUTED! CALLED WITH ${params.username}`);
    return fetch(`http://api.github.com/users/${params.username}`).then(function(payload) {
      return payload.json();
    });
  },

  setupController(c, m) {
    this._super(...arguments);
    console.debug(m.login);
  },
});
