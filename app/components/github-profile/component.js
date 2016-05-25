import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    didClick() {
      this.set('isLoading', true);
      console.debug('calling didClick from inside the github-profile component');
      this.get('actionComingFromTheRoute')().then(() => {
        console.debug('the actionComingFromTheRoute action from the route has finished, so now this is executed');
        this.set('isLoading', false);
      });
    },
  }
});
