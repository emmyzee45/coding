from typing import Deque

class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        q, farthest = Deque(), 0
        q.append(0)

        while q:
            i = q.popleft()
            start = max(minJump + i, farthest + 1)
            for j in range(start, min(i + maxJump + 1, len(s))):
                if s[j] == "0":
                    q.append(j)
                    if j == len(s) - 1:
                        return True
            farthest = i + maxJump
        return False

obj = Solution()
print(obj.canReach("011010", 2, 3))