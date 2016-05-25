import { test } from 'qunit';
import moduleForAcceptance from 'demo-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | rooms');

test('visiting /rooms', function(assert) {
  visit('/rooms');

  andThen(function() {
    assert.equal(currentURL(), '/rooms');
  });
});

test('Visiting /rooms, looking at the header title', function(assert) {
  var functionThatGetsExecutedWhenThisSucceeds = function() {
    assert.equal(find('.header').text(), 'Rooms', 'Shows a header');
  };
  visit('/rooms').then(functionThatGetsExecutedWhenThisSucceeds);
});

test('When I visit Rooms, I can see a list of rooms', function(assert) {
  visit('/rooms');

  andThen(() => {
    assert.equal(find('li.room').length, 6, 'shows all the rooms coming from the server');
  });
});
