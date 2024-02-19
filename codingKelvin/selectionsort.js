const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const selection = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let swapIdx = i;

        for(let j = i +1; j < arr.length; j++) {
            if(arr[j] < arr[swapIdx]) {
                swapIdx = j;
            }
        }

        swap(arr, i, swapIdx)
    }

    return arr;
}

console.log(selection([4,2,5,1,5,1,8]))