import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Route.extend({

  // Hooks
  model() {
    return fetch(`/users/mariogintili`).then(function(payload) {
      return payload.json();
    });
  },

  actions: {
    callTheServer() {
      console.log(this.toLocaleString());
      console.debug('callTheServer has been called now');
      return fetch('/slow/endpoint').then((payload) => payload.json());
    },
  }
});
