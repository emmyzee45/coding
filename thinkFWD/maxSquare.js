// function maximalSquare(matrix) {
//     if(!matrix || !matrix[0]) return 0;

//     let cache = [...matrix],
//         width = matrix[0].length,
//         height = matrix.length,
//         solution = Math.max(...matrix[0]);
    
//     for(let i = 0; i < matrix.length; i++) {
//         solution = Math.max(solution, matrix[i][0])
//     }

//     for(let row = 1; row < height; row++) {
//         for(let col = 1; col < width; col++) {

//             if(matrix[row][col] === 1) {
//                 cache[row][col] = Math.min(cache[row-1][col],cache[row][col-1], cache[row-1][col-1]) + 1;
//                 solution = Math.max(cache[row][col], solution);
//             }
//         }
//         console.log(cache)
//     }
//     console.log(solution)
//     return solution* solution;
// }
function maximalSquare(matrix) {
    if(!matrix || !matrix[0]) return 0;

    let width = matrix[0].length,
        height = matrix.length,
        cache = new Array(width+1).fill(0),
        solution = Math.max(...matrix[0]),
        prev = 0;

    for(let row = 1; row <= height; row++) {
        for(let col = 1; col <= width; col++) {
            let  temp = cache[col]
            if(matrix[row-1][col-1] === 1) {
                cache[col] = Math.min(prev,cache[col - 1], cache[col]) + 1;
                solution = Math.max(cache[col], solution);
            } else {
                cache[col] = 0;
            }
            prev = temp;
        }
        console.log(cache)
    }
    console.log(solution)
    return solution* solution;
}

console.log(maximalSquare([[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]))