from typing import List

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []

        def backtrack(i, subset):
            if i == len(nums):
                res.append(subset[::])
                return

            subset.append(nums[i])
            backtrack(i + 1, subset)
            subset.pop()

            while i + 1 < len(nums) and nums[i] == nums[i + 1]:
                i += 1
            backtrack(i + 1, subset)
        backtrack(0, [])
        return res
        

obj = Solution()
print(obj.subsets([1,2,2]))