const maxCountChar = (str) => {
    if(str.length === 0) return null;
    
    let charCountObj = {};
    let maxChar = str[0];
    let maxCount = 0;

    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        charCountObj[char] = charCountObj[char] + 1 || 1;

        if(charCountObj[char] > maxCount) {
            maxChar = char;
            maxCount = charCountObj[char];
        }
    }

    return maxChar;
}

console.log(maxCountChar("I love eating every day"))