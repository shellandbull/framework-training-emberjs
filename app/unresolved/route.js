import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Route.extend({

  model() {
    return new RSVP.Promise(() => {});
  }
});
