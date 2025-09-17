from typing import List

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        visit = set()
        ROWS, COLS = len(grid), len(grid[0])

        def dfs(r, c):
            if r < 0 or c < 0 or r == ROWS or c == COLS or (r, c) in visit or not grid[r][c]:
                return 0
            
            visit.add((r, c))
            # res = 1

            # res += dfs(r + 1, c)
            # res += dfs(r - 1, c)
            # res += dfs(r, c + 1)
            # res += dfs(r, c - 1)

            # return res

            return (1 + dfs(r + 1, c) + 
                        dfs(r - 1, c) + 
                        dfs(r, c + 1) + 
                        dfs(r, c - 1))
        
        area = 0
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] and (r, c) not in visit:
                    area = max(area, dfs(r, c))

        return area

grid = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],    
    [0,0,0,0,0,0,0,1,1,1,0,0,0],    
    [0,0,0,0,0,0,0,1,1,0,0,0,0],    
]
obj = Solution()
print(obj.maxAreaOfIsland(grid))