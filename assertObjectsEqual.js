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
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;

  if (eqObjects(obj1, obj2)) {
    console.log(`✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
    return;
  }

  console.log(`⛔️ Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};

assertObjectsEqual({ c: "1", d: ["2", 3] } , { c: "1", d: [2, 3] });
