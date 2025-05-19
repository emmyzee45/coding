from typing import List

class Solution:
    def restoreIPAddresses(self, s: str) -> List[str]:
        res = []

        def backtrack(i, dots, curIp):
            if i == len(s) and dots == 4:
                res.append(curIp[:-1])
                return
            
            if dots > 4:
                return
            
            for j in range(i, min(i + 3, len(s))):
                if int(s[i:j+1]) < 256 and (s[j] != "0" or j == i):
                    backtrack(j + 1, dots + 1, curIp + s[i:j+1] + ".")
        backtrack(0, 0, "")
        return res
# from typing import List

# class Solution:
#     def restoreIPAddresses(self, s: str) -> List[str]:
#         res = []

#         if len(s) > 12:
#             return res
        
#         def backtrack(i, dots, curIP):
#             if dots == 4 and i == len(s):
#                 res.append(curIP[: -1])
#                 return
#             if dots > 4:
#                 return
            
#             for j in range(i, min(i + 3, len(s))):
#                 if int(s[i: j +1]) < 256 and (i == j or s[j] != "0"):
#                     backtrack(j + 1, dots + 1, curIP + s[i:j+1] + ".")
#         backtrack(0, 0, "")
#         return res

obj = Solution()
print(obj.restoreIPAddresses("25525511135"))