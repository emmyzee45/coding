class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def rootToLeaf(self, root: TreeNode) -> int:

        # def dfs(root, curSum):
        #     if not root:
        #         return 0
        #     if not root.left and not root.right:
        #         return curSum + str(root.val)
            
        #     left = dfs(root.left, curSum + str(root.val))
        #     right = dfs(root.right, curSum + str(root.val))

        #     return int(left) + int(right)
        
        # return dfs(root, "")

        def dfs(cur, num):
            if not cur:
                 return 0
            
            num = num * 10 + cur.val
            print(num)
            if not cur.left and not cur.right:
                return num
            return dfs(cur.left, num) + dfs(cur.right, num)
        return dfs(root, 0)