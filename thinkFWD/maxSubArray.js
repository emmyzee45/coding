// function MaxSubArray(nums) {
//     let maxCount = 0;
//     let curCount = 0;
    
//     for(let i = 0; i < nums.length; i++) {
//         curCount = Math.max(curCount + nums[i], nums[i])
//         maxCount = Math.max(maxCount, curCount)
//     }
//     return maxCount;
// }

function MaxSubArray(nums) {
    let maxCount = nums[0];
    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
        maxCount = Math.max(nums[i], maxCount)
    }
    return maxCount;
}

console.log(MaxSubArray([-2,1,-3,4,-1,2,1,-5,4]))