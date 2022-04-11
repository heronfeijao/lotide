const countOnly = (allItems, itemsToCount) => {
  let result = {};

  for (let elem of allItems) {
    if (itemsToCount[elem]) {
      result[elem] = result[elem] + 1 || 1;
    }
  }
  return result;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

module.exports = countOnly;