//CODE TESTING
const eqArrays = (arr1, arr2) => {
  if (!(arr1.length === arr2.length)) {
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
    return;
  }
  console.log(`⛔️ Assertion Failed: ${arr1} !== ${arr2}`);
};

//return a "slice of the array with elements taken from the beginning."

const takeUntil = function(array, callback) {
  let arrayResult = [];
  for (let elem of array) {
    if (callback(elem)) {
      break;
    }
    arrayResult.push(elem);
  }
  return arrayResult;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1); // [ 1, 2, 5, 7, 2 ]

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);