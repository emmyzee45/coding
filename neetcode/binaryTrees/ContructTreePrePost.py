from typing import List, Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def contructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        N = len(postorder)
        post_val_to_idx = {}

        for i, n in enumerate(postorder):
            post_val_to_idx[n] = i
        
        def build(i1, i2, j1):
            if i1 > i2:
                return None
            
            root = TreeNode(preorder[i1])
            if i1 != i2:
                left_val = preorder[i1 + 1]

                mid = post_val_to_idx[left_val]

                left_side = mid - j1 + 1

                root.left = build(i1 + 1, i1 + left_side, j1)
                root.right = build(i1 + left_side + 1, i2, mid + 1)
            return root
        
        return build(0, N -1, 0)