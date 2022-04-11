const tail = (array) => {
  let arrElements = [];
  for (let i = 1; i < array.length; i++) {
    arrElements.push(array[i]);
  }
  return arrElements;
};

module.exports = tail;