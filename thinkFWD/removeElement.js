function removeElement(arr, val) {
    if(!arr) return 0;
    // let pointer = 0;

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === val) {
            arr.splice(i, 1);
            i--;
        }
        // if(arr[i] !== val) {
        //     arr[pointer] = arr[i];
        //     pointer++;
        // }
    }

    // return pointer;
    return arr.length;
}

console.log(removeElement([3,3,2,2,3], 3))