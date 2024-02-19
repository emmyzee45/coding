function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] =  temp;
}

const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for( let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j +1 )
            }
        }
    }

    return arr;
}

console.log(bubbleSort([2,42,5,1,6,23,8,9,3,1]))