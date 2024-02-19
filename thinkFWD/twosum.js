const twoSum = (nums, target) => {
    const cache = {};
    for(let [index, num] of nums.entries()) {
        if(cache[num] !== undefined) return [cache[num], index];
        cache[target - num] = index;
    }
}

console.log(twoSum([2,7,11,15], 9))