const letterPositions = (sentence) => {
  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }

    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(i);
  }
  return results;
};

module.exports = letterPositions;