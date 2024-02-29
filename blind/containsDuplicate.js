const containsDuplicate = (nums) => {
    let arr = new Set(nums);

    return arr.size !== nums.length;
}
console.log(containsDuplicate([1,4,2,5]))