import Ember from 'ember';

export default Ember.Controller.extend({

   days:[
      { name: 'Day one'},
      { name: 'Day two'},
      { name: 'Day three'},
    ],

    image: Ember.Object.create({ logoUrl: 'https://avatars.githubusercontent.com/u/16404363?v=3'})
});
