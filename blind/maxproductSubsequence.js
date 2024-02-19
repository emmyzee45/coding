const maxProduct = function (nums) {
    // let curr = nums[0];
    // let max = nums[0];

    // for(let i = 1; i < nums.length; i++) {
    //     curr = Math.max(curr * nums[i], nums[i]);
    //     max = Math.max(curr, max)
    // }
    // return max;

    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        nums[i] = Math.max((nums[i - 1] || 1) * nums[i], nums[i]);
        max = Math.max(nums[i], max)
    }
    return max;
}

console.log(maxProduct([-2,0,-1]))