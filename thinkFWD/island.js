// const numIslands = (grid) => {
//     let countIslands = 0;
//     for(let rowIndex in grid) {
//         for(let colIndex in grid) {
//             if(grid[rowIndex][colIndex] === 1) {
//                 countIslands++;
//                 teraform(parseInt(rowIndex), parseInt(colIndex), grid);
//             }
//         }
//     }
//     return countIslands;
// }

// const teraform = (rowIn, colIn, grid) => {
//     if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === 0) return;
//     grid[rowIn][colIn] = 0;
//     teraform(rowIn+1, colIn, grid);
//     teraform(rowIn-1, colIn, grid);
//     teraform(rowIn, colIn+1, grid);
//     teraform(rowIn, colIn-1, grid);
// }

const numIslands = (grid) => {
    let countIslands = 0;
    for(let rowIndex in grid) {
        for(let colIndex in grid) {
            if(grid[rowIndex][colIndex] === 1) {
                countIslands++;
                teraform(parseInt(rowIndex), parseInt(colIndex), grid);
            }
        }
    }
    return countIslands;
}

const teraform = (rowIn, colIn, grid) => {
    if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === 0) return;
    grid[rowIn][colIn] = 0;
    teraform(rowIn + 1, colIn, grid);
    teraform(rowIn - 1, colIn, grid);
    teraform(rowIn, colIn + 1, grid);
    teraform(rowIn, colIn - 1, grid);
}

console.log(numIslands([[1,1,1,1,0], [1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]]))
// [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]
// [[1,1,1,1,0], [1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]]
