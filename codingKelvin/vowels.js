const vowels = (str) => {
    str = str.toLowerCase();
    // const vowel = "aeiou";
    // let count = 0;
    // for(let i = 0; i < str.length; i++) {
    //     const char = str[i];

    //     for(let j = 0; j < vowel.length; j++) {
    //         if(vowel[j] === char) {
    //             count++;
    //         }
    //     }
    // }

    // return count;

    // str = str.toLowerCase();
    // const vowel = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1}
    // let count = 0;
    // for(let i = 0; i < str.length; i++) {
    //     const char = str[i];

    //     if(vowel[char]) {
    //         count++
    //     }
    // }

    // return count;

    const vowelRegex = /[aeiou]/g;

    const match = str.match(vowelRegex);

    return match ? match.length : 0
}

console.log(vowels("I am a world class developer using iterations"))