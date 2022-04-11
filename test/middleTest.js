const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// assertArraysEqual([], middle([1])); // => []
// assertArraysEqual([], middle([1, 2])); // => []

// assertArraysEqual([2], middle([1, 2, 3])); // => [2]
// assertArraysEqual([3], middle([1, 2, 3, 4, 5])); // => [3]

// assertArraysEqual([2, 3], middle([1, 2, 3, 4])); // => [2, 3]
// assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6])); // => [3, 4]


describe("#middle", () => {

  it("returns [] for [1])[0]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  
});