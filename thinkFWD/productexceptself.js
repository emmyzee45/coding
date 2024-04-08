function productExceptSelf(nums) {
    let output = new Array(nums.length).fill(nums[0]);
    // console.log(output)
    let cacheVer = nums[nums.length - 1];
    for(let i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] * nums[i];
    }
    
    // console.log(output[output.length - 2])
    // console.log(output[nums.length - 1])

    console.log(output)
    output[nums.length - 1] = output[output.length - 2];
    for(let j = nums.length - 2; j > 0; j--) {
        console.log(output[j])
        output[j] = output[j-1] * cacheVer;
        cacheVer = cacheVer* nums[j];
    }
    output[0] = cacheVer;
    return output;
}

console.log(productExceptSelf([1,2,3,4]))