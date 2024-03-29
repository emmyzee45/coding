const countSubstrings = (s) => {
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        isPal(i, i);
        isPal(i, i+1);
    }

    function isPal(left, right) {
        while( left >= 0 && right < s.length && s[left] === s[right]) {
            count++
            left--;
            right++;
        }
    }

    return count
}

console.log(countSubstrings("aaa"))