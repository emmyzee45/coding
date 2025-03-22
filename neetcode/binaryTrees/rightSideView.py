from typing import List, Optional, Deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        # res = []
        # queue = [root]

        # while queue:
        #     rightside = 0

        #     for i in range(len(queue)):
        #         cur = queue.pop(0)
        #         rightside = cur.val
        #         if cur.left:
        #             queue.append(cur.left)
        #         if cur.right:
        #             queue.append(cur.right)
            
        #     res.append(rightside)

        # return res
        res = []
        q = Deque()
        q.append(root)

        while q:
            rightSide = None
            qLen = len(q)

            for i in range(qLen):
                node = q.popleft()
                if node:
                    rightSide = node
                    q.append(node.left)
                    q.append(node.right)

            if rightSide:
                res.append(rightSide.val)

        return res