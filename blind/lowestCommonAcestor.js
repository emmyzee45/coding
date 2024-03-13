var lowestCommonAcestor = function(root, p, q) {
    if(root.val > p && root.val > q) {
        return lowestCommonAcestor(root.left, p, q);
    } else if(root.val < p && root.val < q) {
        return lowestCommonAcestor(root.right, p, q)
    } else {
        return root;
    }
}
// function lowestCommonAncestor(root, p, q) {
//     if (!root) return null;

//     const queue = [root];

//     while (queue.length > 0) {
//         const current = queue.shift();

//         if (current.val > p.val && current.val > q.val) {
//             queue.push(current.left);
//         } else if (current.val < p.val && current.val < q.val) {
//             queue.push(current.right);
//         } else {
//             return current;
//         }
//     }

//     return null;
// }