const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3, [5, [6, 7, [8]]]], [4]], [[2, 3, [5, [6, 7, [8]]]], [4]]), true); // => true

assertEqual((eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])), false); // => false
assertEqual(eqArrays([[2, 4, [5, [6, 7, [8]]]], [4]], [[2, 3, [5, [6, 7, [8]]]], [4]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false