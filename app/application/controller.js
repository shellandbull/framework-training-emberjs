import Ember from 'ember';

export default Ember.Controller.extend({
  justMario: Ember.Object.create({
    id: 'mario-id',
    login: 'mario@hyperdrive.is',
    avatar_url: 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg',
  })
});
