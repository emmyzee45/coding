function climbingstaircase(n) {
  let numberOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }
  return numberOfWays[n - 1];
}
console.log(climbingstaircase(1));
console.log(climbingstaircase(2));
console.log(climbingstaircase(3));
console.log(climbingstaircase(4));
console.log(climbingstaircase(5));
