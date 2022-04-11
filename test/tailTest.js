const assert = require('chai').assert;
const tail = require('../tail');
// const assertEqual = require('../assertEqual');

describe("#tail", () => {

  it("returns 2 for [1, 2, 3, 4])[0]", () => {
    assert.strictEqual(tail([1, 2, 3, 4])[0], 2);
  });

  it("returns 3 for [1, 2, 3, 4][1]", () => {
    assert.strictEqual(tail([1, 2, 3, 4])[1], 3);
  });

  it("returns 4 for [1, 2, 3, 4][2]", () => {
    assert.strictEqual(tail([1, 2, 3, 4])[2], 4);
  });

});