class Solution:
    def punishmentNumber(self, n: int) -> int:
        res = 0

        def partition(i, cur, target, string):
            if i == len(string) and cur == target:
                return True
            
            for j in range(i, len(string)):
                print(string[i: j + 1])
                if partition(j + 1, cur + int(string[i: j + 1]), target, string):
                    return True
            return False

        for i in range(n + 1):
            if partition(0, 0, i, str(1234)):
                res += i * i
        return res
    
obj = Solution()
print(obj.punishmentNumber(10))