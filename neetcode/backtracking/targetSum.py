from typing import List, DefaultDict

class Solution:
    def targetSum(self, nums: List[int], target) -> int:
        
        # def backtrack(i, curSum):
        #     if i == len(nums):
        #         return 1 if curSum == target else 0
            
        #     return (backtrack(i + 1, curSum + nums[i]) +
        #     backtrack(i + 1, curSum - nums[i]))
        
        # return backtrack(0,0)

        # dp = {}
        # def backtrack(i, curSum):
        #     if (i, curSum) in dp:
        #         return dp[(i, curSum)]
            
        #     if i == len(nums):
        #         return 1 if curSum == target else 0
            
        #     dp[(i, curSum)] = (backtrack(i + 1, curSum + nums[i]) +
        #     backtrack(i + 1, curSum - nums[i]))

        #     return dp[(i, curSum)]
        
        # return backtrack(0,0)

        # dp = [DefaultDict(int) for _ in range(len(nums) + 1)]

        # dp[0][0] = 1
        # for i in range(len(nums)):
        #     for cur_sum, count in dp[i].items():
        #         dp[i + 1][cur_sum + nums[i]] += count
        #         dp[i + 1][cur_sum - nums[i]] += count
        # return dp[len(nums)][target]

        dp = DefaultDict(int)

        dp[0] = 1

        for i in range(len(nums)):
            next_dp = DefaultDict(int)
            for cur_sum, count in dp.items():
                next_dp[cur_sum + nums[i]] += count
                next_dp[cur_sum - nums[i]] += count
            dp = next_dp
        return dp[target]
    
obj = Solution()
print(obj.targetSum([1,1,1,1,1], 3))