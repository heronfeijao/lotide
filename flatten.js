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


const array = [1, 2, [[[3, 4], 5], [6]]]; // => [1, 2, 3, 4, 5, 6]

// ORIGINAL CODE
// const flatten = (arr) => {
//   let newArr = [];

//   for (let elem of arr) {
//     if (Array.isArray(elem)) {
//       elem.forEach(element => {
//         newArr.push(element);
//       });
//     } else {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// };

const flatten = (arr) => {
  let newArr = [];

  for (let elem of arr) {
    console.log(elem);
    if (Array.isArray(elem)) {
      newArr = newArr.concat(flatten(elem));
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
};

console.log(flatten(array));