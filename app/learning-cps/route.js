import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.Object.create({
      name: 'Mario Gintili',
      height: '1,75',
      weight: '70',
    });
  },
});
