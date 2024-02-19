function longestPalindrome(str) {
    let longest = '';

    function isPal(s, left, right) {

        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++
        }
        return s.slice(left+1, right)
    }

    for(let i = 0; i < str.length; i++) {
        let oddPal = isPal(str, i, i);
        let evenpal = isPal(str, i, i+1);

        let longestPal = oddPal.length > evenpal ? oddPal : evenpal;

        if(longestPal.length > longest.length) {
            longest = longestPal;
        }

    }
    return longest;
}

console.log(longestPalindrome('baabbaad'))