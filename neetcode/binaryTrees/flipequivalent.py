from typing import Optional

class TreeNode:
    def __init_(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def flipequivalent(self, r1: Optional[TreeNode], r2: Optional[TreeNode]) -> bool:
        if not r1 or not r2:
            return not r1 and not r2
        if r1.val != r2.val:
            return False
        a = self.flipequivalent(r1.left, r2.left) and self.flipequivalent(r1.right, r2.right)
        return a or self.flipequivalent(r1.left, r2.right) and self.flipequivalent(r1.right, r2.left)
        # if not r1 and not r2:
        #     return True
        # if not r1 or not r2:
        #     return False
        # if r1.val == r2.val:
        #     return (self.flipequivalent(r1.left, r2.right) and self.flipequivalent(r1.right, r2.left))
        # return False