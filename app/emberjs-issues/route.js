import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Route.extend({

  model() {
    return fetch('http://api.github.com/repos/emberjs/ember.js/issues').then((res) => {
      return res.json();
    });
  }
});
