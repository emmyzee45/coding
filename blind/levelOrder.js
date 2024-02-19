function levelOrder(root) {

    if(root === null) return [];

    const queue = [root];
    const res = [];

    while(queue.length) {
        let levelSize = queue.length;
        let levelArr = [];

        while(levelSize) {
            let current = queue.shift();

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);

            levelArr.push(current.value);
            levelSize--;
        }
        res.push(levelArr)
    }
}