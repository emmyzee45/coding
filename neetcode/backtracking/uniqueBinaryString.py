from typing import List

class Solution:
    def uniqueBinaryString(self, nums: List[str]) -> str:
        strSet = { s for s in nums }

        def backtrack(i, cur):
            if i == len(nums):
                res = "".join(cur)
                return None if res in strSet else res
            
            res = backtrack(i + 1, cur)
            if res: return res

            cur[i] = "1"

            res = backtrack(i + 1, cur)
            if res: return res
        
        return backtrack(0, ["0" for s in nums])
            
    
obj = Solution()
print(obj.uniqueBinaryString(["111", "011", "000"]))