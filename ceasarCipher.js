function ceasarCipher(str, size) {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const count = alphabetString.indexOf(char);

    if (count === -1) {
      res += char;
      continue;
    }
    const encoded = (count + size) % 26;
    res += alphabetString[encoded];
  }
  return res;
}

console.log(ceasarCipher("gurer ner 9 qbtf!", 13));
