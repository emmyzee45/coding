from typing import List, DefaultDict, Deque
import heapq

class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        # adj = {i: [] for i in range(n)}
        # for v, u in edges:
        #     adj[v].append(u)
        #     adj[u].append(v)
         
        # visit = set()   
        # def dfs(v, prev):
        #     if v in visit:
        #         return 0
            
        #     res = 1
        #     visit.add(v)
        #     for nei in adj[v]:
        #         if nei == prev:
        #             continue
        #         res = max(res, 1 + dfs(nei, v))
                
        #     visit.remove(v)
        #     return res
        
        # minHeap = []
        # for j in range(n):
        #     heapq.heappush(minHeap, [dfs(j, -1), j])

        # min_height = None
        # res = []
        # while minHeap:
        #     h, root = heapq.heappop(minHeap)
        #     if h != min_height and min_height != None:
        #         break
        #     res.append(root)
        #     min_height = h
        
        # return res
        
        if n == 1:
            return [0]
        
        adj = DefaultDict(list)
        for n1, n2 in edges:
            adj[n1].append(n2)
            adj[n2].append(n1)
        
        edge_cnt = {}
        leaves = Deque()
        for src, neighbors in adj.items():
            if len(neighbors) == 1:
                leaves.append(src)
            edge_cnt[src] = len(neighbors)
        
        while leaves:
            if n <= 2:
                return list(leaves)
            for i in range(len(leaves)):
                node = leaves.popleft()
                n -= 1
                for nei in adj[node]:
                    edge_cnt[nei] -= 1
                    if edge_cnt[nei] == 1:
                        leaves.append(nei)
    
obj = Solution()
print(obj.findMinHeightTrees(6, [[3,0], [3,1], [3,2], [3,4], [5,4]]))