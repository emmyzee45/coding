# 0(V + E)
from typing import List

class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        # adj = {i: [] for i in range(len(graph))}
        # for j in range(len(graph)):
        #     for k in graph[j]:
        #         adj[j].append(k)
      
        # res, visit = set(), set()
        # def dfs(v):
        #     if v in visit:
        #         return False
            
        #     visit.add(v)
        #     for nei in adj[v]:
        #         if not dfs(nei):
        #             return False
                
        #     visit.remove(v)
        #     res.add(v)
        #     return True

        # for i in range(len(graph)):
        #     if i in visit:
        #         continue
        #     dfs(i)
        # return list(res)
        n = len(graph)
        safe = {}
        
        def dfs(v):
            if v in safe:
                return safe[v]
            
            safe[v] = False
            for nei in graph[v]:
                if not dfs(nei):
                    return safe[v]
            safe[v] = True
            return safe[v]
        
        res = []
        for i in range(n):
            if dfs(i):
                res.append(i)
        return res
obj = Solution()
print(obj.eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[],[]]))