function merge(array1, array2) {
  let p1 = 0;
  let p2 = 0;
  let res = [];

  while (p1 < array1.length && p2 < array2.length) {
    if (array1[p1] < array2[p2]) {
      res.push(array1[p1]);
      p1++;
    } else {
      res.push(array2[p2]);
      p2++;
    }
  }

  while (p1 < array1.length) {
    res.push(array1[p1]);
    p1++;
  }

  while (p2 < array2.length) {
    res.push(array2[p2]);
    p2++;
  }

  return res;
}

console.log(merge([4, 6, 7], [1, 5]));
