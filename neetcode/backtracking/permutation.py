from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        # result = []

        # def backtrack(path, remaining):
        #     if not remaining:
        #         result.append(path)
        #         return
        #     for i in range(len(remaining)):
        #         backtrack(path + [remaining[i]], remaining[:i] + remaining[i+1:])

        # backtrack([], nums)
        # return result
        result = []

        if len(nums) == 1:
            return [nums.copy()]
        
        for i in range(len(nums)):
            n = nums.pop(0)
            perms = self.permute(nums)

            for perm in perms:
                perm.append(n)
            result.extend(perms)
            nums.append(n)
        return result

obj = Solution()
print(obj.permute([1,2,3]))