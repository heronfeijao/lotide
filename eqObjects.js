const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
};

//eqArrays

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

const eqObjects = function (object1, object2) {

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false

assertEqual(eqObjects(abc, cd2),false); // => false