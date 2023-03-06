const stringPattern = (str, substr) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      const patternChar = substr[j];

      if (patternChar !== str[i + j]) {
        break;
      }

      if (j === substr.length - 1) {
        count++;
      }
    }
  }

  return count;
};

console.log(stringPattern("lolippo", "lol"));
