// FUNCTION TESTING
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  
  console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION CODE
//return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = (obj,cb) => {
  for (let elem in obj) {
    if (cb(obj[elem])) {
      return elem;
    }
  }
  return;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 1 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),'noma'); // => "noma"