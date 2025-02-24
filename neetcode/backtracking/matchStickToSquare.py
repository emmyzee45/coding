from typing import List

class Solution:
    def matchStickToSquare(self, matchsticks: List[int]) -> bool:

        length = sum(matchsticks) // 4
        sides = [0] * 4
        matchsticks.sort(reverse=True)

        if sum(matchsticks) / 4 != length:
            return False
        
        def backtrack(i):
            if i == len(matchsticks):
                return True
            
            for j in range(len(matchsticks)):
                if sides[j] + matchsticks[i] <= length:
                    sides[j] += matchsticks[i]
                    if backtrack(i + 1):
                        return True
                    sides[j] -= matchsticks[i]
            return False
        return backtrack(0)

obj = Solution()
print(obj.matchStickToSquare([1,1,2,2,2]))
