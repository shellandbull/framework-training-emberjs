import Ember from 'ember';

// Old syntax
// var computed = Ember.computed;

// New syntax
const { computed } = Ember;

export default Ember.Controller.extend({
  array: [
    Ember.Object.create({ name: 'mario' }),
    Ember.Object.create({ name: 'Taylor' }),
    Ember.Object.create({ name: 'cookie'}),
  ],

  arrayCount: computed('array.[]', function() {
    return this.get('array.length');
  }),

  namesList: computed('array.@each.name', function() {
    return this.get('array').map(item => item.get('name')).join('-');
    // return this.get('array').mapBy('name').join('-');
  }),

  fullWeight: computed('model.weight', function() {
    return `${this.get('model.weight')} kilograms`;
  }),


  fullHeight: computed('model.height', {
    get(key) {
      return this.get('model.height');
    },
    set(_, newVal, oldVal) {
      if (isNaN(parseInt(newVal))) {
        console.debug(oldVal);
        return oldVal;
      } else {
        return newVal;
      }
    }
  }),
});
