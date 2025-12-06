from typing import List

class Solution:
    # def courseSchedule(self, numCourses: int, prerequisite: List[List[int]]) -> int:
    #     adj = {i: [] for i in range(numCourses)}
    #     for crs, pre in prerequisite:
    #         adj[crs].append(pre)
            
    #     visit = set()
    #     res = []
    #     def dfs(crs):
    #         if crs in visit:
    #             return False
            
    #         visit.add(crs)
    #         for pre in adj[crs]:
    #             if not dfs(pre):
    #                 return False
              
    #         visit.remove(crs)  
    #         adj[crs] = []
    #         if crs not in res:
    #             res.append(crs)
    #         return True
        
    #     for crs in range(numCourses):
    #         if not dfs(crs):
    #             return []
    #     return res
    def courseSchedule(self, numCourses: int, prerequisite: List[List[int]]) -> List[int]:
        prereq = {i: [] for i in range(numCourses)}
        for crs, pre in prerequisite:
            prereq[crs].append(pre)
            
        visit, cycle = set(), set()
        res = []
        def dfs(crs):
            if crs in cycle:
                return False
            if crs in visit:
                return True
            
            cycle.add(crs)
            for pre in prereq[crs]:
                if not dfs(pre):
                    return False
            
            cycle.remove(crs)
            visit.add(crs)
            res.append(crs)
            return True
        
        for i in range(numCourses):
            if not dfs(i):
                return []
        return res
    
obj = Solution()
print(obj.courseSchedule(6, [[0,1],[0,2],[1,3],[4,0],[3,2], [5,0]]))