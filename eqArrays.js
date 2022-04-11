// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

//eqArrays

const eqArrays = (arr1, arr2) => {
  let eqArrVar;

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      eqArrVar = eqArrays(arr1[i], arr2[i]);
      if (!eqArrVar) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// TESTS

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
// assertEqual(eqArrays([[2, 3, [5, [6, 7, [8]]]], [4]], [[2, 3, [5, [6, 7, [8]]]], [4]]), true); // => true

// assertEqual((eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])), false); // => false
// assertEqual(eqArrays([[2, 4, [5, [6, 7, [8]]]], [4]], [[2, 3, [5, [6, 7, [8]]]], [4]]), false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false