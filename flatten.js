const eqArrays = (arr1, arr2) => {
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


const array = [1, 2, [3, 4], 5, [6]]; // => [1, 2, 3, 4, 5, 6]

const flatten = (arr) => {
  let newArr = [];

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      elem.forEach(element => {
        newArr.push(element);
      });
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
};

console.log(flatten(array));

/* *** RECURSION ***
const flatten = function (array1) {
  let outputArray = [];
  for (const element of array1) {
    console.log(element)
    if (Array.isArray(element)) {
      outputArray = outputArray.concat(flatten(element));
    } else {
      outputArray.push(element);
    }
  }
  return outputArray;
};

flatten([1, 2, [[3, 4], 5], [6]])

*/