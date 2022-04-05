// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//eqArrays

const eqArrays = (arr1, arr2) => {
  let result = true;
  for (let i = 0; i < arr1.length ; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS