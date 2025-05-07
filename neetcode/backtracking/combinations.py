from typing import List

class Solution:
    def combinations(self, n: int, k: int) -> List[List[int]]:
        res = []

        def backtrack(start, comb):
            if len(comb) == k:
                res.append(comb.copy())
                return
            
            for i in range(start, n + 1):
                comb.append(i)
                backtrack(i + 1, comb)
                comb.pop()
        backtrack(1, [])
        return res
# from typing import List

# class Solution:
#     def combinations(self, n: int, k: int) -> List[List[int]]:
#         res = []

#         def backtrack(comb, start):
#             if len(comb) == k:
#                 return res.append(comb.copy())
            
#             for j in range(start, n + 1):
#                 comb.append(j)
#                 backtrack(comb, j + 1)
#                 comb.pop()

#         backtrack([], 1)
#         return res
    
obj = Solution()
print(obj.combinations(4,2))