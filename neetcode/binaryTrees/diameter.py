class TreeNode:
    def __init__(self, val=0, left=None,  right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        # res = [0]
        # def dfs(root):
        #     if not root:
        #         return -1
            
        #     left = dfs(root.left)
        #     right = dfs(root.right)
        #     res[0] = max(res[0], 2 + left + right)

        #     return 1 + max(left, right)
        # dfs(root)
        # return res[0]
        res = 0

        def dfs(root):
            nonlocal res
            if not root:
                return 0
            
            left = dfs(root.left)
            right = dfs(root.right)
            res = max(left + right, res)

            return 1 + max(left, right)
        
        dfs(root)
        return res