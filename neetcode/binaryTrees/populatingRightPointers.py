from typing import Optional, Deque

class Node:
    def __init__(self, val=0, left=None, right=None, next=None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next

class Solution:
    def connect(self, node: 'Optional[Node]') -> 'Optional[Node]':
        # q = Deque()
        # q.append(node)
   
        # while q:
        #     length = len(q)
        #     for i in range(length):
        #         node1 = q.popleft()
        #         if node1.left:
        #             q.append(node1.left)
        #         if node1.right:
        #             q.append(node1.right)
        #         if i == length - 1:
        #             continue
        #         node2 = q.popleft()
        #         node1.next = node2
        #         q.appendleft(node2)
        # return node
        cur, nxt = node, node.left if node else None

        while cur and nxt:
            cur.left.next = cur.right
            if cur.next:
                cur.right.next = cur.next.left
            
            cur = cur.next
            if not cur:
                cur = nxt
                nxt = cur.left
        return node