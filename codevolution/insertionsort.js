function insertion(arr) {
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > numberToInsert) {
             arr[j + 1] = arr[j];
             j = j - 1;
        }
        arr[j + 1] = numberToInsert;
    }
    return arr;
}

console.log(insertion([4,1,5,2,8,6,9]))