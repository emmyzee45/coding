const reverseInt = (n) => {
    let reversed = n.toString().split('').reverse().join('');
    reversed = parseInt(reversed);
    console.log(reversed)
    if(n < 0) {
        return reversed * -1;
    }
    return reversed;
}

console.log(reverseInt(-34))