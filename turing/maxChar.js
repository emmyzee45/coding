const maxChar = (s) => {
    let maxChar = "";
    let maxCount = 0;
    const charContainer = {}
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        // const pattern = /[A-Za-z]+/g
        // if(!char.match(pattern)) continue
        if(/[^A-Za-z]/.test(char)) continue
        charContainer[char] = charContainer[char] + 1 || 1;
        if(charContainer[char] > maxCount) {
            maxChar = char;
            maxCount = charContainer[char];
        }
    } 
    return maxChar
}

console.log(maxChar("AABBBaBaa1111111314256"))