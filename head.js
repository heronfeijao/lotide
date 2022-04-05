// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const head = (array) => {
  return array[0]
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3,6,7]), 5);