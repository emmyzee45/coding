from typing import List

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums.sort()
        visited = [False] * len(nums)

        def backtrack(path):
            if len(path) == len(nums):
                result.append(path[:])
                return

            for i in range(len(nums)):
                if visited[i]:
                    continue
                # Skip duplicates: ensure we only use the first unused duplicate
                if i > 0 and nums[i] == nums[i - 1] and not visited[i - 1]:
                    continue

                visited[i] = True
                path.append(nums[i])
                backtrack(path)
                path.pop()
                visited[i] = False

        backtrack([])
        return result
# from typing import List

# class Solution:
#     def permuteUnique(self, nums: List[int]) -> List[List[int]]:
#         res = []
#         perm = []
#         count = { n: 0 for n in nums }

#         for n in nums:
#             count[n] += 1
        
#         def dfs():
#             if len(perm) == len(nums):
#                 res.append(perm.copy())
#                 return
            
#             for n in count:
#                 if count[n] > 0:
#                     perm.append(n)
#                     count[n] -= 1

#                     dfs()
#                     perm.pop()
#                     count[n] +=1
#         dfs()
#         return res

obj = Solution()
print(obj.permuteUnique([1,1,2]))