import Ember from 'ember';

export default Ember.Controller.extend({
  pets: [
    Ember.Object.create({ name: 'cat' }),
    Ember.Object.create({ name: 'dog' }),
    Ember.Object.create({ name: 'parrot' }),
    Ember.Object.create({ name: 'exotic tiger' }),
  ]
});
