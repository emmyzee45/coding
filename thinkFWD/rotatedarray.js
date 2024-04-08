const rotatedArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right) {
        const mid = Math.floor((left+ right) / 2);
        const value = arr[mid]
        if(value === target) {
            return mid
        } else if(arr[left] <= arr[mid]) {
            if(arr[left] <= target && target <= arr[mid]) {
                right = mid - 1;
            }else {
                left = mid + 1;
            }
        } else {
            if(arr[mid] <= target && target <= arr[right]) {
                left = mid + 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
}

console.log(rotatedArray([4,5,6,7,0,1,2], 0))