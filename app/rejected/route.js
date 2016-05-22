import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({

  model() {
    return new RSVP.Promise((_, reject) => {
      reject(new Error('I am broken!'));
    });
  }
});
