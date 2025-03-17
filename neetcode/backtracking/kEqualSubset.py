from typing import List

class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        if sum(nums) % k:
            return False

        target = sum(nums) / k
        used = [False] * len(nums)
        nums.sort(reverse=True)

        def backtrack(i, k, subsetSum):
            if k == 0:
                return True
            if subsetSum == target:
                return backtrack(0, k - 1, 0)

            for j in range(i, len(nums)):
                if used[j] or subsetSum + nums[j] > target:
                    continue
                used[j] = True
                if backtrack(j + 1, k, subsetSum + nums[j]):
                    return True
                used[j] = False
            return False
        return backtrack(0, k, 0)
    
obj = Solution()
print(obj.canPartitionKSubsets([4,3,2,3,5,2,1], 4))