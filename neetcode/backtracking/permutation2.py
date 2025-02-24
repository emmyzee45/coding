from typing import List

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res = []
        perm = []
        count = { n: 0 for n in nums }

        for n in nums:
            count[n] += 1

        def dfs():
            if len(perm) == len(nums):
                return res.append(perm.copy())
            
            for n in count:
                if count[n] > 0:
                    perm.append(n)
                    count[n] -= 1

                    dfs()

                    perm.pop()
                    count[n] += 1
        dfs()
        return res

obj = Solution()
print(obj.permuteUnique([1,1,2]))