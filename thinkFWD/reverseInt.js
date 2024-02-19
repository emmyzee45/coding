function reverseInt(n) {
    if( n < 0) return -1 * reverseInt(-n)
    res = 0;
    for(let i = n; i > 0; i = Math.floor(i/10)) {
        res = res * 10 + i%10;
    }
    return res > 2**31 - 1 ? 0 : res;
}

console.log(reverseInt(122))