from typing import List, DefaultDict
import heapq

class Solution:
    def countPaths(self, n: int, roads: List[List[int]]) -> int:
        adj = DefaultDict(list)
        for u, v, w in roads:
            adj[u].append((w, v))
            adj[v].append((w, u))
        
        min_heap = [(0, 0)]
        min_cost = [float('inf')] * n
        path_count = [0] * n
        path_count[0] = 1
        MOD = 10*9 + 7
        
        while min_heap:
            cost, node = heapq.heappop(min_heap)
            
            for nei_cost, nei in adj[node]:
                if nei_cost + cost < min_cost[nei]:
                    min_cost[nei] = nei_cost + cost
                    path_count[nei] = path_count[node]
                    heapq.heappush(min_heap, (cost + nei_cost, nei))
                elif nei_cost + cost == min_cost[nei]:
                    path_count[nei] = (path_count[node] + path_count[nei]) % MOD
        return path_count[n - 1]
# from typing import List, DefaultDict
# import heapq

# class Solution:
#     def countPaths(self, n: int, roads: List[List[int]]) -> int:
#         adj = DefaultDict(list)
#         for u, v, w in roads:
#             adj[u].append((w, v))
#             adj[v].append((w, u))
            
#         MOD = 10**9 + 7
#         min_heap = [(0, 0)]
#         min_cost = [float("inf")] * n
#         path_count = [0] * n
#         path_count[0] = 1
        
#         while min_heap:
#             cost, node = heapq.heappop(min_heap)
            
#             for nei_cost, nei in adj[node]:
#                 if cost + nei_cost < min_cost[nei]:
#                     min_cost[nei] = cost + nei_cost
#                     path_count[nei] = path_count[node]
#                     heapq.heappush(min_heap, (cost + nei_cost, nei))
#                 elif cost + nei_cost == min_cost[nei]:
#                     path_count[nei] = (path_count[nei] + path_count[node]) % MOD
#         return path_count[n - 1]

obj = Solution()
print(obj.countPaths(7,[[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]))