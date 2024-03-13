const lengthOfLongestSubstring = (s) => {
    // let charObj = {};
    // let max = 0;
    // let count = 0;
    // let arr = [];

    // for(let i = 0; i < s.length; i++) {
    //     let char = s[i];
    //     if(!charObj[char]) {
    //         charObj[char] = 1;
    //         count++;
    //         max = Math.max(max, count);
    //     } else {
    //         charObj = {};
    //         charObj[char] = 1;
    //         count = 1;
    //     }
    // }
    // return max;
    let longestStr = 0;
    let set = new Set();

    let left = 0;
    let right = 0;

    while(right < s.length) {
        let letter = s[right];
        if(!set.has(letter)) {
            set.add(letter);
            longestStr = Math.max(longestStr, set.size);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    return longestStr;
}

console.log(lengthOfLongestSubstring('abcabcbb'))