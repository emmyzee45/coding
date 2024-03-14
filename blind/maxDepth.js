// const maxDepth = (root) => {
    // let maxLength = 0;

    // function dfs(root, len) {
    //     if(!root) return;
    //     if(len > maxLength) maxLength = len;

    //     dfs(root.left, len+1);
    //     dfs(root.right, len+1);
    // }

    // dfs(root, 0)
    
    // return maxLength;
// }

// function maxDepth(root) {
//     if (!root) return 0;

//     const leftDepth = maxDepth(root.left);
//     const rightDepth = maxDepth(root.right);

//     return Math.max(leftDepth, rightDepth) + 1;
// } 
function maxDepth(root) {
    if(!root) return 0;

    let depth =  0;
    let queue = [root];

    while(queue.length) {

        let len = queue.length;

        for(let i = 0; i < len; i++) {
            let current = queue.shift();

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right)
        }
        depth++
    }
    return depth;
}