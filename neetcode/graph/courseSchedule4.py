# 0(N**3 + Q)
from typing import List, DefaultDict
import copy


class Solution:
    def courseSchedule(self, numCourses: int, prerequisite: List[List[int]], queries: List[List[int]]) -> List[bool]:
        # preMap = {i: [] for i in range(numCourses)}
        # for pre, crs in prerequisite:
        #     preMap[crs].append(pre)

        # visit = set()

        # def dfs(crs):
        #     if crs in visit:
        #         return False
        #     if temp[crs] == []:
        #         return True

        #     visit.add(crs)
        #     for nei in temp[crs]:
        #         if nei == crs:
        #             continue
        #         if not dfs(nei):
        #             return False

        #     visit.remove(crs)
        #     return True

        # answer = []
        # for j in range(len(queries)):
        #     temp = copy.deepcopy(preMap)
        #     temp[queries[j][1]].append(queries[j][0])

        #     answer.append(dfs(queries[j][1]))
        #     visit.clear()

        # return answer
        adj = DefaultDict(list)
        for pre, crs in prerequisite:
            adj[crs].append(pre)
        
        def dfs(crs):
            if crs not in prereqMap:
                prereqMap[crs] = set()
                for pre in adj[crs]:
                    prereqMap[crs] |= dfs(pre)
                prereqMap[crs].add(crs)
            return prereqMap[crs]
        
        prereqMap = {}
        for crs in range(numCourses):
            dfs(crs)
        
        res = []
        for u, v in queries:
            res.append(u in prereqMap[v])
        return res


obj = Solution()
print(obj.courseSchedule(2, [[1, 0]], [[0, 1], [1, 0]]))
