const longestRepeatingCharacter = (s, k) => {
    // let longest = 0;
    // let count = 0;
    // let flag = 0;

    // for(let i = 0; i < s.length; i++) {
    //     let left = i;
    //     let right = s.length;

    //     while(left < right) {
    //         if(s[left] === s[i]) {
    //             count++;
    //             left++;
    //         } else {
    //             if(flag < k) {
    //                 count++;
    //                 left++;
    //                 flag++;
    //             } else {
    //                 longest = Math.max(longest, count);
    //                 count = 0;
    //                 flag = 0;
    //             }
    //         }
    //         if(s[right] === s[i]){
    //             count++;
    //             right--;
    //         } else {
    //             if(flag < k) {
    //                 count++;
    //                 right--;
    //                 flag++;
    //             } else {
    //                 longest = Math.max(longest, count);
    //                 count = 0;
    //                 flag = 0;
    //             }
    //         }
            
    //     }
    // }
    // return longest;

    let map = {};

    let topFrequency = 0;
    let longest = 0;

    let left = 0;
    let right = 0;

    while(right < s.length) {
        let rightChar = s[right];

        map[rightChar] = map[rightChar]+1 || 1;

        topFrequency = Math.max(topFrequency, map[rightChar]);

        while((right-left+1)- topFrequency > k) {
            let leftChar = s[left];
            map[leftChar]--;
            left++;
        }

        longest = Math.max(longest, (right-left+1));
        right++;
    }
    return longest;
}

console.log(longestRepeatingCharacter('AABABBA', 1))