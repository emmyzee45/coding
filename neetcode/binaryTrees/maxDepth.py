from typing import Deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maximumDepth(self, root: TreeNode) -> int:
        # if not root:
        #     return 0
        
        # return 1 + max(self.maximumDepth(root.left), self.maximumDepth(root.right))
        
        # level = 0
        # q = [root]

        # while q:
        #     for i in range(len(q)):
        #         cur = q.pop(0)
        #         if cur.left:
        #             q.append(cur.left)
        #         if cur.right:
        #             q.append(cur.right)
        #     level += 1
        # return level

        res = 0
        stack = [[root, 1]]

        while stack:
            node, depth = stack.pop()
            if node:
                res = max(res, depth)
                stack.append([node.left, depth + 1])
                stack.append([node.right, depth + 1])
        return res