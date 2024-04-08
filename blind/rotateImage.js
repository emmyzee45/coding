const rotateImage = (matrix) => {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = i; j < matrix[i].length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }

    }

    for(let i = 0; i < matrix.length; i++){
        // let row = matrix[k];

        // let left = 0;
        // let right = row.length - 1;

        // while(left < right) {
        //     const temp = row[left];
        //     row[left] = row[right];
        //     row[right] = temp;
        //     left++;
        //     right--;
        // }
        for(let j = 0; j < matrix.length/2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length-1-j];
            matrix[i][matrix.length-1-j] = temp;
        }
    }
    console.log(matrix)
}

rotateImage([[1,2,3],[4,5,6],[7,8,9]])