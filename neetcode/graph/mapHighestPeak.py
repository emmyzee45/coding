from typing import List, Deque

# class Solution:
#     def mapOfHighestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
#         q = Deque()
#         ROWS, COLS = len(isWater), len(isWater[0])
#         visit = set()

#         for r in range(ROWS):
#             for c in range(COLS):
#                 if isWater[r][c]:
#                     q.append([r, c, 0])

#         while q:
#             r, c, l = q.popleft()
#             isWater[r][c] = l
#             visit.add((r, c))
#             cordinates = [[r, c - 1], [r - 1, c], [r + 1, c], [r, c + 1]]

#             for r, c in cordinates:
#                 if (r, c) in visit or c < 0 or r < 0 or r >= ROWS or c >= COLS:
#                     continue
#                 q.append([r, c, l + 1])
#         return isWater
class Solution:
    def mapOfHighestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        q = Deque()
        ROWS, COLS = len(isWater), len(isWater[0])
        visit = set()
        res = [ [-1] * COLS for _ in range(ROWS) ]

        for r in range(ROWS):
            for c in range(COLS):
                if isWater[r][c]:
                    q.append([r, c])
                    res[r][c] = 0

        while q:
            r, c = q.popleft()
            h = res[r][c]
            visit.add((r, c))
            cordinates = [[r, c - 1], [r - 1, c], [r + 1, c], [r, c + 1]]

            for r, c in cordinates:
                if (r, c) in visit or c < 0 or r < 0 or r >= ROWS or c >= COLS:
                    continue
                q.append([r, c])
                res[r][c] = h + 1
        return res

obj = Solution()
print(obj.mapOfHighestPeak([[0,1], [0,0]]))