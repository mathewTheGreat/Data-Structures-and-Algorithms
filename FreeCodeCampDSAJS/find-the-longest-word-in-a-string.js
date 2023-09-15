function findLongestWordLength(str) {
  const words = str.split(" ");

  let longest = 0;

  for (let i = 0; i < words.length; i++) {
    const currentWordLength = words[i].length;

    if (currentWordLength > longest) {
      longest = currentWordLength;
    }
  }

  return longest;
}


findLongestWordLength("The quick brown fox jumped over the lazy dog");