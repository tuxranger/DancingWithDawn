const assert = require('chai).assert;
const reset = require ('../ng/register.ctrl.js');



describe('Reset', function()) {
  it('app should return hello', function()) {
    assert.equal(reset(), 'hello');
  }
}
