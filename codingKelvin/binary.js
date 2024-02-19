const binary = (array, value) => {
    let left = 0;
    let right = array.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midVal = array[mid];

        if(midVal === value) {
            return mid;
        } else if( midVal < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(binary([1,2,4,5,6,7,8,9], 5))