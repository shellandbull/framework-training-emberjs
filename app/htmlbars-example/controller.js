import Ember from 'ember';

export default Ember.Controller.extend({

  mario: Ember.Object.create({
    weight: '70 Kg',
    height: '1.72 meters',
  }),


  iterable: [
    Ember.Object.create({ lastName: 'Gintili' }),
    Ember.Object.create({ lastName: 'Jones' }),
    Ember.Object.create({ lastName: 'Baboo' }),
    Ember.Object.create({ lastName: 'Collins' }),
  ],

});
