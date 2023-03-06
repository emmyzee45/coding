// function chunck(array, size) {
//     let res = [];

//     for(let i = 0; i < array.length; i++) {
//         const item = array[i];
//         const last = res[res.length - 1];
//         console.log("last",last)
//         console.log([res.length - 1])

//         if(!last || last.length === size) {
//             res.push([item]);
//             console.log("res",res)
//         } else {
//             last.push(item);
//             console.log("last",last)
//         }
//     }

//     return res
// }
// const array = [3,4,1,7,2,8]
// chunck(array,4)

const chunck = (array, size) => {
    let res = [];

    for(let i = 0; i < array.length; i++){
        const item = array[i];
        last = res[res.length - 1];

        if(!last || last.length === size) {
            res.push([item]);
        }else {
            last.push(item);
        }
    }

    return res;
}

