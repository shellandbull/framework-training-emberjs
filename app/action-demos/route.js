import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    increaseIncrementable() {
      this.controller.incrementProperty('incrementable', 1);
    }
  }
});
