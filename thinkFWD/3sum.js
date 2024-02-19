function threeSum (arr) {
    arr.sort();
    let res = [];

    for(let [index, number] of arr.entries()) {
        if(number > 0) return res;
        if(number === arr[index - 1]) continue;

        let left = index + 1;
        let right = arr.length - 1;

        while(left < right) {
            const temp = arr[left] + arr[right] + number;
            if(temp === 0) {
                res.push([number, arr[left], arr[right]]);
                left++;
                right--;
            } else if( temp > 0) {
                right--;
            } else {
                left++;
            }
            while(left < right && arr[left] === arr[left + 1]) {
                left++;
            }
            while(left < right && arr[right] === arr[right - 1]) {
                right--;
            }
        }
    }
    return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]))