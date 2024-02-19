const isValid = (str) => {
    const stack = [];
    let i = 0;
    let len = str.length;

    while(i < len) {
        let curParen = str[i];
        stack.push(curParen);

        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1];

        if(open + closed === "()") {
            stack.pop();
            stack.pop();
        }
        i++;
    }
    return stack.length === 0;
}

function generateParenthesis(n) {

    const  result = [];

    // dfs recursion helper
    const dfs = (i, n, slate) => {
        if(i === n * 2) {
            if(isValid(slate.join(''))) {
                result.push(slate.join(''))
            }
            return;
        }
        
        console.log(slate)
        // add open paren
        slate.push("(");
        dfs(i+1, n, slate);
        slate.pop();
        // add close paren
        slate.push(")");
        dfs(i+1, n,slate);
        slate.pop();
    }

    dfs(0, n, []);
    return result;
}

console.log(generateParenthesis(3))