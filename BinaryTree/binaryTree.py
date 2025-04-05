import sys
import os
sys.path.append(os.path.abspath("../neetcode/binaryTrees"))

from AncestorOfDeepestLeaves import Solution

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def is_empty(self):
        return self.root is None

    def insert(self, val):
        new_node = Node(val)
        if self.is_empty():
            self.root = new_node
        else:
            self._insert_node(self.root, new_node)

    def _insert_node(self, root, new_node):
        if root.val > new_node.val:
            if root.left is None:
                root.left = new_node
            else:
                self._insert_node(root.left, new_node)
        else:
            if root.right is None:
                root.right = new_node
            else:
                self._insert_node(root.right, new_node)

    def search(self, root, val):
        if root is None:
            return False
        if root.val == val:
            return True
        elif root.val > val:
            return self.search(root.left, val)
        else:
            return self.search(root.right, val)

    def pre_order(self, root):
        if root:
            print(root.val)
            self.pre_order(root.left)
            self.pre_order(root.right)

    def in_order(self, root):
        if root:
            self.in_order(root.left)
            print(root.val)
            self.in_order(root.right)

    def post_order(self, root):
        if root:
            self.post_order(root.left)
            self.post_order(root.right)
            print(root.val)

    def level_order(self):
        if not self.root:
            return
        queue = [self.root]
        while queue:
            curr = queue.pop(0)
            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)

    def level_order_array(self, root):
        if root is None:
            return []
        queue = [root]
        res = []
        while queue:
            level_size = len(queue)
            level_arr = []
            for _ in range(level_size):
                current = queue.pop(0)
                level_arr.append(current.val)
                if current.left:
                    queue.append(current.left)
                if current.right:
                    queue.append(current.right)
            res.append(level_arr)
        return res

    def min(self, root):
        if root.left is None:
            return root.val
        return self.min(root.left)

    def max(self, root):
        if root.right is None:
            return root.val
        return self.max(root.right)

    def delete(self, val):
        self.root = self._delete_node(self.root, val)

    def _delete_node(self, root, val):
        if root is None:
            return None
        if val < root.val:
            root.left = self._delete_node(root.left, val)
        elif val > root.val:
            root.right = self._delete_node(root.right, val)
        else:
            if root.left is None and root.right is None:
                return None
            if root.left is None:
                return root.right
            if root.right is None:
                return root.left
            root.val = self.min(root.right)
            root.right = self._delete_node(root.right, root.val)
        return root

    def max_path_sum(self, root):
        self.max_sum = float('-inf')

        def dfs(node):
            if not node:
                return 0
            left = max(0, dfs(node.left))
            right = max(0, dfs(node.right))
            current_max = node.val + left + right
            print(left, right, current_max)
            self.max_sum = max(self.max_sum, current_max)
            return node.val + max(left, right)

        dfs(root)
        return self.max_sum


    def invert_tree(self, root):
        if root:
            root.left, root.right = self.invert_tree(root.right), self.invert_tree(root.left)
        return root

    def kth_smallest(self, root, k):
        self.count = 0

        def dfs(node):
            if not node:
                return
            if node.val <= k:
                print(node.val)
                self.count += 1
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        return self.count

    def lowest_common_ancestor(self, root, p, q):
        if not root:
            return None
        if root.val > p and root.val > q:
            return self.lowest_common_ancestor(root.left, p, q)
        elif root.val < p and root.val < q:
            return self.lowest_common_ancestor(root.right, p, q)
        else:
            return root.val

    def max_depth(self, root):
        if not root:
            return 0
        left_depth = self.max_depth(root.left)
        right_depth = self.max_depth(root.right)
        return max(left_depth, right_depth) + 1
        
    def same_tree(self, root1, root2):
        if not root1 and not root2:
            return True
        if not root1 or not root2:
            return False
        if root1.val == root2.val:
            return self.same_tree(root1.left, root2.left) and self.same_tree(root1.right, root2.right)
        return False

bst = BinarySearchTree()
# bst1 = BinarySearchTree()
# bst2 = BinarySearchTree()


# bst1.insert(5)
# bst1.insert(3)
# bst1.insert(7)

# bst2.insert(1)
# bst2.insert(2)
# bst2.insert(3)

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(13)
bst.insert(14)

contruct = Solution()

print(contruct.lcaDeepestLeAves(bst.root))
# bst.delete(10)
# bst.in_order(bst.root)
# print(balancedTree.isBalanced(bst.root))
# print("Max Path Sum:", bst.max_path_sum(bst.root))
# print("Level Order Array:", bst.level_order_array(bst.root))
# print("Inverted Tree Root:", bst.invert_tree(bst.root))
# print("kth Smallest Count (<= 7):", bst.kth_smallest(bst.root, 7))
# print("Lowest Common Ancestor of 3 & 7:", bst.lowest_common_ancestor(bst.root, 3, 7))
# print("Max Depth:", bst.max_depth(bst.root))
# print("Same Tree:", bst.same_tree(bst1.root, bst2.root))
