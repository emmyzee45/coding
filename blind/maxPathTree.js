function  maxPathSum (root) {
    
    let max = -Infinity;

    function dfs(root) {

        if(!root) return 0;

        let left = Math.max(0, dfs(root.left));
        let right = Math.max(0, dfs(root.right));
        let curMax = left + root.value + right;

        max = Math.max(curMax, max);

        return root.value + Math.max(left, right);
    }
    dfs(root);
    return max;

}