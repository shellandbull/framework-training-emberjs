import Ember from 'ember';
import fetch from 'fetch';
export default Ember.Route.extend({

  model() {
    return fetch('https://api.github.com/users/mariogintili').then((payload) => {
      return payload.json();
    });
  },
});
