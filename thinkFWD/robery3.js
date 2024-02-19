function rob (root) {
    function decision(node) {
        if(!node) return [0,0];

        let [leftRob, leftNot] = decision(node.left);
        let [rightRob, rightNot] = decision(node.right);

        let robD = node.val + leftNot + rightNot;
        let notRob = Math.max(leftRob + rightRob, leftRob + rightNot, leftNot+rightNot, leftNot + rightRob);

        return [robD, notRob]
    }

    return Math.max(...decision(root))
}

console.log(rob([3,2,3,null,3,null,1]))