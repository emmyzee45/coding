// function palidromeNumber(n) {
//     if(n < 0) return false;
//     return n.toString().split("").reverse().join("") == n;
// }

function palidromeNumber(n) {
    let reverse = 0;
    for(let i = n; i >= 1; i = Math.floor(i/10)) {
        reverse = reverse * 10 + i%10
    }
    // while(n >= 1) {
    //     reverse = reverse * 10 + n% 10;
    //     n = Math.floor(n/10)
    // }
    console.log(typeof(reverse))
    console.log(typeof(n))
    return reverse === n
}

console.log(palidromeNumber(121))