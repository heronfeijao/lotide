const map = (array,callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CODE

// const words1 = ["ground", "control", "to", "major", "tom"];
// const words2 = ["terra", "controle", "para", "major", "moto"];
// const words3 = ["copo", "control", "mesa", "rede", "celular"];
// const words4 = ["iphone", "motorola", "nokia", "samsung"];

// const results1 = map(words1, word => word[0]);
// const results2 = map(words2, word => word[0]);
// const results3 = map(words3, word => word[0]);
// const results4 = map(words4, word => word[0]);

// assertArraysEqual(results1,['g','c','t','m','t']);
// assertArraysEqual(results2,['t','c','p','m','m']);
// assertArraysEqual(results3,['c','c','m','r','c']);
// assertArraysEqual(results4,['i','m','n','s']);

module.exports = map;