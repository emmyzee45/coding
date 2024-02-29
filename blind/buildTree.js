function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var buildTree = function(preorder, inorder) {
    
    function recurse(pStart, pEnd, inStart, inEnd) {

        // base case
        if(pStart > pEnd || inStart > inEnd) return null;

        let rootVal = preorder[pStart];
        let inIndex = inorder.indexOf(rootVal);
        let nLeft = inIndex - inStart;

        let root = new TreeNode(rootVal);

        root.left = recurse(pStart+1, pStart+nLeft, inStart, inEnd-1);
        root.right = recurse(pStart+1+nLeft, pEnd, inIndex+1, inEnd);

        return root;
    }

    return recurse(0, preorder.length -1, 0, inorder.length-1);
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))