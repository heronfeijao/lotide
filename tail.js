// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (array) => {
  let arrElements = [];
  for (let i = 1; i < array.length; i++) {
    arrElements.push(array[i]);
  }
  return arrElements;
};

const arrayElements = [1, 2, 3, 4, 5];

console.log(arrayElements);
console.log(tail(arrayElements));

assertEqual(4, tail(arrayElements).length);
assertEqual(tail(arrayElements)[0], 2);
assertEqual(tail(arrayElements)[1], 3);
assertEqual(tail(arrayElements)[2], 4);
assertEqual(tail(arrayElements)[3], 5);