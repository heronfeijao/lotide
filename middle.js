// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  console.log(arr1, arr2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔️ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// ACTUAL FUNCTION
const middle = (array) => {
  let midArr = [];

  if (array.length === 1 || array.length === 2) {
    return midArr;
  }

  if ((array.length - 1) % 2 === 0) {
    midArr.push(array[(array.length - 1) / 2]);
  } else {
    midArr.push(array[(array.length / 2) - 1]);
    midArr.push(array[(array.length / 2)]);
  }

  return midArr;
};

// assertArraysEqual([], middle([1])) // => []
// assertArraysEqual([], middle([1, 2])) // => []

// assertArraysEqual([2], middle([1, 2, 3])) // => [2]
// assertArraysEqual([3], middle([1, 2, 3, 4, 5])) // => [3]

// assertArraysEqual([2, 3], middle([1, 2, 3, 4])) // => [2, 3]
// assertArraysEqual([3, 4], middle([1, 2, 3, 4, 5, 6])) // => [3, 4]