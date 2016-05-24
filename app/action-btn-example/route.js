import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    removePet(pet) {
      this.controller.get('pets').removeObject(pet);
    },
  },
});
