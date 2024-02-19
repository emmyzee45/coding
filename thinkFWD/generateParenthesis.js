const generateParenthesis = (n) => {
    const solution = [];
    let count = 0;

    const generateCombo = (leftPCount, rightPCount, partial) => {
        // console.log(partial)
        // console.log(leftPCount, rightPCount)
        // console.log(solution)
        if(leftPCount > rightPCount) return;
        if(!leftPCount && !rightPCount) solution.push(partial);
        if(leftPCount > 0) generateCombo(leftPCount - 1, rightPCount, partial + "(")
        if(rightPCount > 0) generateCombo(leftPCount, rightPCount - 1, partial + ")")
    }

    generateCombo(n, n,'');
    return solution;
}

console.log(generateParenthesis(3))