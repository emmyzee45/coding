# 0(n + p)
from typing import List

class Solution:
    # def courseSchedule(self, numCourse: int, prerequiste: List[List[int]]) -> bool:
    #     visit = set()
    #     adj = {i: [] for i in range(numCourse)}

    #     for v1, v2 in prerequiste:
    #         adj[v1].append(v2)
            
    #     def dfs(v):
    #         if v in visit:
    #             return False
    #         visit.add(v)
    #         for nei in adj[v]:
    #             if not dfs(nei):
    #                 return False
    #         visit.remove(v)
    #         return True
        
    #     for v in range(numCourse):
    #         if v in visit:
    #             continue
    #         if not dfs(v):
    #             return False
    #     return True
    def courseSchedule(self, n: int, prerequisite: List[List[int]]) -> bool:
        preMap = {i: [] for i in range(n)}
        for crs, pre in prerequisite:
            preMap[crs].append(pre)
            
        visit = set()
        
        def dfs(v):
            if v in visit:
                return False
            if preMap[v] == []:
                return True
            visit.add(v)
            for pre in preMap[v]:
                if not dfs(pre):
                    return False
            visit.remove(v)
            preMap[v] = []
            return True
        
        for i in range(n):
            if not dfs(i):
                return False
        return True
    
obj = Solution()
print(obj.courseSchedule(5, [[0,1],[0,2],[1,3],[1,4],[3,4]]))