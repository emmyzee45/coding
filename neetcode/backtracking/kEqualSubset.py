from typing import List

class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        target = sum(nums) / 4
        used = [False] * len(nums)

        def backtrack(i, k, subset):
            if k == 0:
                return True
            if subset == target:
                return backtrack(0, k - 1, 0)
            
            for j in range(i, len(nums)):
                if used[j] or subset + nums[j] > target:
                    continue
                used[j] = True
                if backtrack(j + 1, k, subset + nums[j]):
                    return True
                used[j] = False
            return False
        return backtrack(0, k, 0)
    
obj = Solution()
print(obj.canPartitionKSubsets([4,3,2,3,5,2,1], 4))