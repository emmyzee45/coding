from typing import List, Optional, Deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
         
# class Solution:
#     def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
#         if not root: return []

#         res = []
#         queue = [root]

#         while queue:
#             level = []
#             levLen = len(queue)

#             while levLen:
#                 cur = queue.pop(0)
#                 level.append(cur.val)
#                 if cur.left:
#                     queue.append(cur.left)
#                 if cur.right:
#                     queue.append(cur.right)
#                 levLen -= 1

#             res.append(level)
            
#         return res

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        q = Deque()
        q.append(root)

        while q:
            qLen = len(q)
            level = []
            for i in range(qLen):
                node = q.popleft()
                if node:
                    level.append(node.val)
                    q.append(node.left)
                    q.append(node.right)
            if level:
                res.append(level)
        return res