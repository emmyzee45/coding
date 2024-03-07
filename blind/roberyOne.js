// const roberyOne = (nums) => {
//     for(let i = 0; i < nums.length; i++) {
//         nums[i] = Math.max((nums[i - 1] || 0), nums[i] + (nums[i-2] || 0));
//     }
//     return nums[nums.length - 1];
// }
const roberyOne = (nums) => {
    if(nums.length == 0) return 0;
    let dp = new Array(nums.length+1).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1]);
    }
    console.log(dp)
    return dp[nums.length-1];
}

console.log(roberyOne([1,2,3,1]));