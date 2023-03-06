function anagram(array1, array2) {
  array1 = array1.toLowerCase().replace(/[\W_]+/g, "");
  array2 = array2.toLowerCase().replace(/[\W_]+/g, "");
  console.log(array1, array2);
  if (array1.length !== array2.length) {
    return false;
  }

  const stringChar = {};
  for (let i = 0; i < array1.length; i++) {
    let char = array1[i];
    stringChar[char] = stringChar[char] + 1 || 1;
  }
  for (let j = 0; j < array2.length; j++) {
    let char = array2[j];

    if (!stringChar[char]) {
      return false;
    } else {
      stringChar[char]--;
      console.log(stringChar);
    }
    return true;
  }
}

console.log(anagram("Jesus", "jeesus!"));
