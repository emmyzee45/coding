class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def countGoodNodes(self, root: TreeNode) -> int:
        # res = 0
        # def dfs(root, cur):
        #     nonlocal res
        #     if not root:
        #          return None
        #     if root.val >= cur:
        #         res += 1

        #     dfs(root.left, max(root.val, cur))
        #     dfs(root.right, max(root.val, cur))

        # dfs(root, root.val)
        # return res

        def dfs(root, maxValue):
            if not root:
                return 0
            
            res = 1 if root.val >= maxValue else 0
            res += dfs(root.left, max(root.val, maxValue))
            res += dfs(root.right, max(root.val, maxValue))
            return res
        
        return dfs(root, root.val)
