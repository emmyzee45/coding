function isPowerOfTwoBitwise(n) {
    if(n < 1) return false;

    return (n & (n-1)) === 0;
}

function isPowerOfTwo(n) {
    if( n < 1) return false;

    while ( n > 1) {
        if( n % 2 !== 0) {
            return false;
        }

        n = n /2;
    }

    return true;
}

console.log(isPowerOfTwoBitwise(1))
console.log(isPowerOfTwoBitwise(2))
console.log(isPowerOfTwoBitwise(3))
console.log(isPowerOfTwoBitwise(5))