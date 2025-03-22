class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        res = [root.val]

        def dfs(root):
            if not root:
                return 0
            
            left, right = dfs(root.left), dfs(root.right)
            leftMax = max(left, 0)
            rightMax = max(right, 0)
            current = leftMax + rightMax + root.val
            res[0] = max(res[0], current)

            return root.val + max(left, right)
        
        dfs(root)
        return res[0]