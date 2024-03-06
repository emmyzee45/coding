const getSum = (a, b) => {
    let carry;

    while(b!== 0) {
        carry = a&b;
        console.log(carry)
        a = a ^ b;
        console.log(a)
        b = carry << 1;
        console.log(b)
    }

    return a;
}

console.log(getSum(2,3))