from typing import List, DefaultDict, Deque
import heapq

class Solution:
    def delaytime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = DefaultDict(list)
        for u, v, w in times:
            adj[u].append([v, w])  
              
        visit, time = set(), float('-inf')
        minHeap = [[0, k]]
        while minHeap:
            w1, n1 = heapq.heappop(minHeap)
            if n1 in visit:
                continue
            time = max(time, w1)
            visit.add(n1)
            
            for n2, w2 in adj[n1]:
                heapq.heappush(minHeap, [w1 + w2, n2])
                
        return time if len(visit) == n else -1
    
obj = Solution()
print(obj.delaytime([[2,1,1],[2,3,1],[3,4,1]], 4, 2))
                