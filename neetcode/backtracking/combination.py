from typing import List

class Solution:
    def combinationSum(self, candidadates: List[int], target: int) -> List[List[int]]:
        res = []

        def backtrack(cur, pos, target):
            if target == 0:
                res.append(cur.copy())
            if target <= 0:
                return
            
            prev = -1
            for i in range(pos, len(candidates)):
                if candidates[i] == prev:
                    continue
                cur.append(candidates[i])
                backtrack(cur, i + 1, target - candidates[i])
                cur.pop()
                prev = candidates[i]

        backtrack([], 0, target)
        return res

obj = Solution()
print(obj.combinationSum([2,3,6,7], 7))