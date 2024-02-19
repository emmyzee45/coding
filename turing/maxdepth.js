const maxDepth = (root) => {
    let maxlen = 0;
    
    function dfs(node, level) {
        if(node === null) return;

        if(level > maxlen) maxlen = level;
        dfs(node.left, level+1);
        dfs(node.right, level+1);
    }

    dfs(root, 1);

    return maxlen;
}

console.log(maxDepth())