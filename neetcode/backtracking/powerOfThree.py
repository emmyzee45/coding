class Solution:
    def checkPowersOfThree(self, n: int) -> bool:

        i = 0
        while 3**(i + 1) <= n:
            i += 1
        
        while i >= 0:
            power = 3**i
            if power <= n:
                n -= power
            if power <= n:
                return False
            i -= 1
        return n == 0

        # def backtrack(i, cur):
        #     if cur == n:
        #         return True
            
        #     if cur > n or 3**i > n:
        #         return False
            
        #     if backtrack(i + 1, cur + 3**i):
        #         return True
            
        #     return backtrack(i + 1, cur)
        
        # return backtrack(0, 0)

obj = Solution()
print(obj.checkPowersOfThree(13))