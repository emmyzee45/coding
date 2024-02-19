const cartesianproduct = (arr1, arr2) => {
    let res = []
    for( let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            res.push([arr1[i], arr2[j]])
        }
    }

    return res;
}

console.log(cartesianproduct([1,2], [4,5,6]))