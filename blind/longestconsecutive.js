const longestConsecutive = (nums) => {
    // nums.sort((a,b) => a - b)
    // let longest = 0;
    // let count = 1;
    
    // for( let num = 1; num < nums.length; num++) {
    //     if(num > 0 && nums[num] === nums[num - 1]) continue;
    //     if(nums[num] - nums[num - 1] === 1) {
    //         count++;
    //         longest = Math.max(longest, count)
    //     } else {
    //         count = 1;
    //     }
    // }

    // return longest;

    let set = new Set(nums);
    let streak = 0;

    for(let num of set) {
        console.log(num)
        if(set.has(num - 1)) continue;
        let currentStreak = 1;

        while(set.has(num+1)) {
            currentStreak++;
            num++;
        }
        streak = Math.max(streak, currentStreak)
    }
    return streak;
}

console.log(longestConsecutive([100,4,200,1,1,3,2,2]))