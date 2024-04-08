const productExceptSelf = function(nums) {
    let res = [];
    let start = 1;

    for(let i = 0; i < nums.length; i++) {
        res.push(start);
        start = start*nums[i];
    }

    let start2 = 1;
    for(let j = nums.length-1; j>=0; j--) {
        res[j] = start2*res[j];
        start2 = start2*nums[j];
    }

    return res;
}

console.log(productExceptSelf([1,2,3,4]))