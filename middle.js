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

module.exports = middle;