// const rob = (nums) => {
//     if(nums.length === 1) return nums[0];
//     if(nums.length === 2) return Math.max(nums[0], nums[1]);

//     let dp1 = new Array(nums.length);
//     let dp2 = new Array(nums.length);

//     robTwice(0, nums.length-2, dp1, nums);
//     robTwice(1, nums.length-1, dp2, nums);

//     function robTwice(i, numslen, dp, nums) {
//         dp[i] = nums[i];
//         dp[i+1] = Math.max(dp[i], nums[i+1]);

//         for(let j = i+2; j <= numslen; j++) {
//             dp[j] = Math.max(nums[j-1], nums[j]+nums[j-2])
//         }
//     }
//     return Math.max(dp1[nums.length-2], dp2[nums.length -1])
// }

function rob(nums) {
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);

    let dp1 = new Array(nums.length);
    let dp2 = new Array(nums.length);

    robTwice(0, nums.length - 1, dp1, nums)
    robTwice(1, nums.length , dp2, nums)

    function robTwice(i, numsLen, dp, nums) {
        for(let j = i; j < numsLen; j++) {
            dp[j] = Math.max(nums[j] + (nums[j - 2] || 0), nums[j] + (nums[j - 3] || 0));
        }
    }

    return Math.max(dp1[nums.length - 2], dp2[nums.length-1])
}

console.log(rob([1,2,3,1]))