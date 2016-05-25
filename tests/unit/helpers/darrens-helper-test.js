import { darrensHelper } from 'demo-app/helpers/darrens-helper';
import { module, test } from 'qunit';

module('Unit | Helper | darrens helper');

// Replace this with your real tests.
test('Behaves the way darrens test helper is meant to behave', function(assert) {
  let result = darrensHelper([42]);
  assert.equal(result, '', 'it returns an empty string');
});
