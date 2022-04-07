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

/*
Our map function will take in two arguments:
  1. An array to map
  2. A callback function
The map function will return a new array based on the results of the callback function.
*/

const map = (array,callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const words1 = ["ground", "control", "to", "major", "tom"];
// const words2 = ["terra", "controle", "para", "major", "moto"];
// const words3 = ["copo", "control", "mesa", "rede", "celular"];
// const words4 = ["iphone", "motorola", "nokia", "samsung"];

// const results1 = map(words1, word => word[0]);
// const results2 = map(words2, word => word[0]);
// const results3 = map(words3, word => word[0]);
// const results4 = map(words4, word => word[0]);

// assertArraysEqual(results1,['g','c','t','m','t']);
// assertArraysEqual(results2,['t','c','p','m','m']);
// assertArraysEqual(results3,['c','c','m','r','c']);
// assertArraysEqual(results4,['i','m','n','s']);