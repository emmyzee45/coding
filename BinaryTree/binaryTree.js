class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    isEmpty() {
        return this.root === null;
    }
    insert(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode) {
        if(root.value > newNode.value) {
            if(root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        }else {
            if(root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root, value) {
        if(!root) {
            return false;
        } else {
            if(root.value === value) {
                return true
            } else if(root.value > value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value)
            }
        }
    }
    preOrder(root) {
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    levelOrder() {
        const queue = []
        queue.push(this.root);
        while(queue.length) {
            const curr = queue.shift();
            console.log(curr.value)
            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }
    levelOrderArray(root) {
        // if(root === null) return [];

        // const queue = [root];
        // const res = [];
    
        // while(queue.length) {
        //     let levelSize = queue.length;
        //     let levelArr = [];

        //     while(levelSize) {
        //         let current = queue.shift();
    
        //         if(current.left) queue.push(current.left);
        //         if(current.right) queue.push(current.right);
    
        //         levelArr.push(current.value);
        //         levelSize--;
        //     }
        //     res.push(levelArr)
        // }
        // return res;
        if(root === null) return [];

        let queue = [root];
        let res = [];

        while(queue.length) {
            let levelArr = [];
            let levelSize = queue.length;

            while(levelSize) {
                const current = queue.shift();
                
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);

                levelArr.push(current.value);
                levelSize--;
            }
            res.push(levelArr);
        }
        return res;
    }
    min(root) {
        if(!root.left) {
            return root.value;
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if(!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    deleteNode(root, value) {
        if(root === null) {
            return root;
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if(value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if(!root.left && !root.right) {
                return null;
            }
            if(!root.left) {
                return root.right;
            }
            if(!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
    maxPathSum (root) {
    
        let max = -Infinity;
    
        function dfs(root) {
    
            if(!root) return 0;
    
            let left = Math.max(0, dfs(root.left));
            let right = Math.max(0, dfs(root.right));
            let curMax = left + root.value + right;
            console.log(left, right, curMax)
            max = Math.max(curMax, max);
    
            return root.value + Math.max(left, right);
        }
        dfs(root);
        return max;
    
    }
}

const bst = new BinarySearchTree();
// console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// bst.delete(10)
// bst.inOrder(bst.root)
console.log(bst.maxPathSum(bst.root))
// console.log(bst.levelOrderArray(bst.root))