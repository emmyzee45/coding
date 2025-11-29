from typing import List
# 0(E.K)

class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        prices = [float("inf")] * n
        prices[src] = 0
        
        for i in range(k+1):
            tempPrices = prices.copy()
            
            for s, d, p in flights:
                if prices[s] == float("inf"):
                    continue
                if prices[s] + p < tempPrices[d]:
                    tempPrices[d] = prices[s] + p
            prices = tempPrices
            
        return -1 if prices[dst] == float("inf") else prices[dst]
    
obj = Solution()
print(obj.findCheapestPrice(3,[[0,1,100],[1,2,100],[0,2,500]],0,2,1))