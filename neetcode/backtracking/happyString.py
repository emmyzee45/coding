# class Solution:
#     def getHappyString(self, n: int, k: int) -> str:
#         res = []
#         choices = "abc"

#         def backtrack(path, prev):
#             if len(path) == n:
#                 res.append("".join(path))
#                 return
            
#             for c in choices:
#                 if c != prev:
#                     path.append(c)
#                     backtrack(path, c)
#                     path.pop()

#         backtrack([], "")
#         return res[k-1] if len(res) >= k else ""
class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        total_happy = 3 * (2**(n-1))
        
        res = []
        choices = "abc"
        left, right = 1, total_happy

        for i in range(n):
            cur = left
            partition_size = (right - left + 1) // len(choices)

            for c in choices:
                if k in range(cur, cur + partition_size):
                    print(cur, right, partition_size, choices)
                    res.append(c)
                    left = cur
                    right = cur + partition_size - 1
                    choices = "abc".replace(c, "")
                    break
                cur += partition_size

        return "".join(res)
    
obj = Solution()
print(obj.getHappyString(3,3))