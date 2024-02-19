function palindrome(str) {
    return str.split("").reverse().join("") === str;
}

function longestPalindrome(str) {
    result = ''
    for(let i = 0; i < str.length; i++) {
        const substring = str.slice(0,i) + str.slice(i+1);
        console.log(substring)
        if(palindrome(substring) && substring.length > result.length) {
            result = substring;
        }
    }
    return result;
}

console.log(longestPalindrome('babad'))