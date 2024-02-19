function climbingStareCase(n) {
    const noOfways = [1, 2];

    for(let i = 2; i <= n; i++) {
        noOfways[i] = noOfways[i - 1] + noOfways[i - 2];
    }

    return noOfways[n - 1];
}

console.log(climbingStareCase(1))
console.log(climbingStareCase(2))
console.log(climbingStareCase(3))
console.log(climbingStareCase(4))
console.log(climbingStareCase(5))