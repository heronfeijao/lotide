// *** eqArrays ***

const eqArrays = (arr1, arr2) => {
  if (!(arr1.length === arr2.length)) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// *** eqObjects ***

const eqObjects = (object1, object2) => {

  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  }

  for (let elem of obj1) {

    if (Array.isArray(object1[elem]) && Array.isArray(object2[elem])) {

      const arrayValue = eqArrays(object1[elem], object2[elem]);
      if (!arrayValue) {
        return false;
      }
    } else if (object1[elem] !== object2[elem]) {
      return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return;
  }

  console.log(`⛔️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

assertObjectsEqual({ a: '1', b: 2 } , { b: 2, a: '1' });


