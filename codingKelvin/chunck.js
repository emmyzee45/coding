const chunck = (array, size) => {
    const res = [];

    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        const last = res[res.length - 1];

        if(!last || last.length === size) {
            res.push([item])
        } else {
            last.push(item)
        }
    }

    return res;
}
console.log(chunck([3,2,4,12,4,1,5], 2))