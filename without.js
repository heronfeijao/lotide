const without = (arr1, arr2) => {
  let newArr = [];
  for (let elem of arr1) {
    if (!arr2.includes(elem)) {
      newArr.push(elem);
    }
  }
  return newArr;
};

module.exports = without;

// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);