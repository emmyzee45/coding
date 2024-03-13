const maxDepth = (root) => {
    let maxLength = 0;

    function dfs(root, len) {
        if(!root) return;
        if(len > maxLength) maxLength = len;

        dfs(root.left, len+1);
        dfs(root.right, len+1);
    }

    dfs(root, 0)
    
    return maxLength;
}
