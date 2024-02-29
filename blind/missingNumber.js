// const missingNumber = (nums) => {
    
//     nums.sort()
//     console.log(nums)
//     for(let num=1; num<nums.length; num++) {
//         if(nums[num]-1 !== nums[num-1] ) return nums[num] - 1;
//     }
//     return nums[nums.length-1] + 1;
// }

const missingNumber = (nums) => {
    nums = new Set(nums);

    for(let num of nums) {
        if(!nums.has(num-1)){
            return num-1
        }
    }
    // return num
    // let xor = nums.length;

    // for(let i = 0; i < nums.length; i++) {
    //     xor = xor ^ i ^ nums[i];
    // }

    // return xor;
}
console.log(missingNumber([3,0,1]))