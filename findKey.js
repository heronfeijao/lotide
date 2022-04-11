const findKey = (obj,cb) => {
  for (let elem in obj) {
    if (cb(obj[elem])) {
      return elem;
    }
  }
  return;
};

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 1 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2),'noma'); // => "noma"

module.exports = findKey;