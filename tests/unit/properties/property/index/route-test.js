import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | properties/property/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:properties/property/index');
    assert.ok(route);
  });
});
