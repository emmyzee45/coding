from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    # def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    #     res = []
    #     stack = [root]

    #     while stack:
    #         cur = stack.pop()
    #         while cur:
    #             res.append(cur.val)
    #             stack.append(cur.right)
    #             cur = cur.left
    #     return res
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        cur, stack = root, []

        while cur or stack:
            if cur:
                res.append(cur.val)
                stack.append(cur.right)
                cur = cur.left
            else:
                cur = stack.pop()
                
        return res