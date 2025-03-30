class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def hasPathSum(self, root: TreeNode, targetSum: int) -> bool:
        # def dfs(root, targetSum):
        #     if not root and targetSum == 0:
        #         return True
        #     if not root:
        #         return False
            
        #     left = dfs(root.left, targetSum - root.val)
        #     right = dfs(root.right, targetSum - root.val)

        #     return (left or right)
        
        # return dfs(root, targetSum)
        def dfs(node, curSum):
            if not node:
                return False
            
            curSum += node.val
            if not node.left and not node.right:
                return curSum == targetSum

            return (dfs(node.left, curSum) or dfs(node.right, curSum))
        return dfs(root, 0)