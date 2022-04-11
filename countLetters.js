const countLetters = (string) => {
  let objLetters = {};

  for (let letter of string) {
    if (!(letter === " ")) {
      objLetters[letter] = objLetters[letter] + 1 || 1;
    }
  }
  return objLetters;
};

module.exports = countLetters;