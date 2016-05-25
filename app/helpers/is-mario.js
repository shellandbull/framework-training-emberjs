import Ember from 'ember';

export function isMario([ peep ]) {
  if (peep.get('lastName') === 'Gintili') {
    return 'Mario';
  } else {
    return '';
  }
}

export default Ember.Helper.helper(isMario);
