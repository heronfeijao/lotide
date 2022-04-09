const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  console.log(`⛔️ Assertion Failed: ${actual} !== ${expected}`);
};

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


// *** OLD CODE WITH OBJECT FIRST ***
// const eqObjects = (object1, object2) => {
//   let eqObjVar;

//   const obj1 = Object.keys(object1);
//   const obj2 = Object.keys(object2);

//   if (obj1.length !== obj2.length) {
//     return false;
//   }

//   for (let elem in object1) {
//     if ((typeof object1[elem] === 'object') && (typeof object2[elem] === 'object')) {
//       eqObjVar = eqObjects(object1[elem], object2[elem]);
//       if (!eqObjVar) {
//         return false;
//       }
//     } else {
//       if (Array.isArray(object1[elem]) && Array.isArray(object2[elem])) {
//         const arrayValue = eqArrays(object1[elem], object2[elem]);
//         if (!arrayValue) {
//           return false;
//         }
//       }
//       if (object1[elem] !== object2[elem]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

const eqObjects = (object1, object2) => {
  let eqObjVar;

  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);

  if (obj1.length !== obj2.length) {
    return false;
  }

  for (let elem in object1) {
    if (Array.isArray(object1[elem]) && Array.isArray(object2[elem])) {
      const arrayValue = eqArrays(object1[elem], object2[elem]);
      if (!arrayValue) {
        return false;
      }
    } else {
      if ((typeof object1[elem] === 'object') && (typeof object2[elem] === 'object')) {
        eqObjVar = eqObjects(object1[elem], object2[elem]);
        if (!eqObjVar) {
          return false;
        }
      } else if (object1[elem] !== object2[elem]) {
        return false;
      }
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba),true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects(abc, cd2),false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2, c: { d: { e: 2 }, f: 5 }, g: [1, 2, 3] }, { a: { z: 1 }, b: 2 }), false); // => false

// assertEqual(eqObjects({ a: { z: 1, x: [1, 2, 3] }, b: 2, c: { d: { e: 2 }, f: 5 }, g: [1, 2, 3] }, { a: { z: 1, x: [1, 2, 3] }, b: 2, c: { d: { e: 2 }, f: 5 }, g: [1, 2, 3] }), true); // => true

// assertEqual(eqObjects({ a: { z: 1, x: [1, 2, 3] }, b: 3, c: { d: { e: 2 }, f: 5 }, g: [1, 2, 3] }, { a: { z: 1, x: [1, 2, 3] }, b: 2, c: { d: { e: 2 }, f: 5 }, g: [1, 2, 3] }), false); // => false

// assertEqual(eqObjects({ a: { z: 1, x: [1, 2, 3] }, b: 3, c: { d: { e: 2 }, f: 5 }, g: [1, 2, 1] }, { a: { z: 1, x: [1, 2, 3] }, b: 2, c: { d: { e: 2 }, f: 5 }, g: [1, 2, 3] }), false); // => false