function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    }
  }

  return count;
}

module.exports = countChar;
