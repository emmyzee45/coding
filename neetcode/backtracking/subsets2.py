from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        def backtrack(i, subsets):
            if i >= len(nums):
                res.append(subsets[:])
                return
            
            subsets.append(nums[i])
            backtrack(i + 1, subsets)
            subsets.pop()
            while i < len(nums) and nums[i - 1] == nums[i]:
                i += 1
            backtrack(i + 1, subsets)
        backtrack(0, [])
        return res
# from typing import List

# class Solution:
#     def subsets(self, nums: List[int]) -> List[List[int]]:
#         res = []

#         def backtrack(subset, i):
#             if i == len(nums):
#                 res.append(subset[::])
#                 return
            
#             subset.append(nums[i])
#             backtrack(subset, i + 1)
#             subset.pop()

#             while i < len(nums) and nums[i] == nums[i + 1]:
#                 i += 1
#             backtrack(subset, i + 1)
#         backtrack([], 0)
#         return res
        

obj = Solution()
print(obj.subsets([1,2,2]))