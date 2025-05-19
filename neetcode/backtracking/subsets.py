# from typing import List

# class Solution:
#     def subsets(self, nums: List[int]) -> List[List[int]]:
#         nums.sort()
#         res = []
#         subsets = []

#         def backtrack(i):
#             res.append(subsets[:])

#             for j in range(i, len(nums)):
#                 if j > i and nums[j] == nums[j - 1]:
#                     continue
#                 subsets.append(nums[j])
#                 backtrack(j + 1)
#                 subsets.pop()
#         backtrack(0)
#         return res

from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        subsets = []

        def dfs(i):
            if i == len(nums):
                res.append(subsets.copy())
                return
            subsets.append(nums[i])
            dfs(i + 1)
            subsets.pop()
            dfs(i + 1)

        dfs(0)
        return res

obj = Solution()
print(obj.subsets([1,2,3]))