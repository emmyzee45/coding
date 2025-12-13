from typing import List, Deque

class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        # visit = set()
        # ROWS, COLS = len(isWater), len(isWater[0])
        # queue = []
        
        # for r in range(ROWS):
        #     for c in range(COLS):
        #         if isWater[r][c] == 1:
        #             queue.append([r, c, 0])
        
        # while queue:
        #     r, c, height = queue.pop(0)
        #     if (r, c) in visit:
        #         continue
        #     visit.add((r, c))
        #     isWater[r][c] = height
            
        #     cord = [[0, -1], [0, 1], [-1, 0], [1, 0]]
        #     for rd, cd in cord:
        #         if (rd + r, cd + c) in visit or rd + r < 0 or cd + c < 0 or rd + r >= ROWS or cd + c >= COLS:
        #             continue
        #         queue.append([r+ rd, c + cd, height + 1])
        # return isWater
        ROWS, COLS = len(isWater), len(isWater[0])
        visit = set()
        queue = Deque()
        res = [[-1] * COLS for _ in range(ROWS)]
        
        for r in range(ROWS):
            for c in range(COLS):
                if isWater[r][c]:
                    queue.append((r, c))
                    visit.add((r, c))
                    res[r][c] = 0
        
        # BFS
        while queue:
            r, c = queue.popleft()
            h = res[r][c]
            
            neighbors = [[r + 1, c], [r-1, c], [r, c + 1], [r, c - 1]]
            for nr, nc in neighbors:
                if nr < 0 or nc < 0 or nr == ROWS or nc == COLS or (nr, nc) in visit:
                    continue
                queue.append((nr, nc))
                visit.add((nr, nc))
                res[nr][nc] = h + 1
        return res
                
obj = Solution()
print(obj.highestPeak([[0,0,1], [1,0,0],[0,0,0]]))