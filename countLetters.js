// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = (string) => {
  let objLetters = {};

  for (let letter of string) {
    if (!(letter === " ")) {
      objLetters[letter] = objLetters[letter] + 1 || 1;
    }
  }
  return objLetters;
};

console.log(countLetters("lighthouse in the house"));