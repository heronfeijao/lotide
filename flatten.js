const flatten = (arr) => {
  let newArr = [];

  for (let elem of arr) {
    if (Array.isArray(elem)) {
      newArr = newArr.concat(flatten(elem));
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
};

module.exports = flatten;