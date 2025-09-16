# from typing import List, Dict
# import heapq

# class Solution:
#     def shortestPath(self, n: int, edges: List[List[int]], src: int) -> Dict[int, int]:
#         adj = { i: [] for i in range(n) }

#         for s, d, w in edges:
#             adj[s].append([d, w])

#         minHeap = [[0, src]]
#         shortest = {}

#         while minHeap:
#             w1, n1 = heapq.heappop(minHeap)
#             if n1 in shortest:
#                 continue
#             shortest[n1] = w1

#             for n2, w2 in adj[n1]:
#                 if n2 not in shortest:
#                     heapq.heappush(minHeap, [w1 + w2, n2])
        
#         for j in range(n):
#             if j not in shortest:
#                 shortest[j] = -1
        
#         return shortest

obj = Solution()
print(obj.shortestPath(5, [[0,1,10], [0,2,3], [1,3,2], [2,1,4], [2,3,8], [2,4,2], [3,4,5]], 0))
            
