import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    add() {
      console.log('action "add" was called from the bubbled-actions route');
    },
  }
});
