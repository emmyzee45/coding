var maximumSubArray = function(nums) {
    let sum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1]);
        sum = Math.max(nums[i], sum);
    }

    return sum;
}

console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]))