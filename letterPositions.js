//TESTING
// const eqArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = (arr1, arr2) => {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
//     return;
//   }

//   console.log(`⛔️ Assertion Failed: ${arr1} !== ${arr2}`);
// };

//FUNCTION

const letterPositions = (sentence) => {
  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }

    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(i);
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));