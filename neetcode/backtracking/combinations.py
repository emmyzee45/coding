
# from typing import List

# class Solution:
#     def combinations(self, n: int, k: int) -> List[List[int]]:
#         res = []

#         def backtrack(cur, pos, target):
#             if len(cur) == target:
#                 res.append(cur.copy())
#                 return
#             if pos >= n:
#                 return
#             cur.append(pos)
#             backtrack(cur, pos + 1, target)
#             cur.pop()
#             backtrack(cur, pos + 1, target)

#         backtrack([], 1, k)
#         return res
    
# obj = Solution()
# print(obj.combinations(4,2))
from typing import List

class Solution:
    def combinations(self, n: int, k: int) -> List[List[int]]:
        res = []

        def backtrack(comb, start):
            if len(comb) == k:
                return res.append(comb.copy())
            
            for j in range(start, n + 1):
                comb.append(j)
                backtrack(comb, j + 1)
                comb.pop()

        backtrack([], 1)
        return res
    
obj = Solution()
print(obj.combinations(4,2))