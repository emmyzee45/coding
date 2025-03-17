from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        def backtrack(subset, i):
            if i == len(nums):
                res.append(subset[::])
                return
            
            subset.append(nums[i])
            backtrack(subset, i + 1)
            subset.pop()

            while i < len(nums) and nums[i] == nums[i + 1]:
                i += 1
            backtrack(subset, i + 1)
        backtrack([], 0)
        return res
        

obj = Solution()
print(obj.subsets([1,2,2]))