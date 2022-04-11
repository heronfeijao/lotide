// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');

module.exports = {
  head:               head,
  tail:               tail,
  middle:             middle,
  eqArrays:           eqArrays,
  assertArraysEqual:  assertArraysEqual,
  assertEqual:        assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqObjects:          eqObjects
};