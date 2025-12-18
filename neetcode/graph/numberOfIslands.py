from typing import List, Deque

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        visit = set()
        q = Deque()
        islands = 0
        
        def bfs(r, c):
            q.append((r, c))
            visit.add((r, c))
            
            while q:
                row, col = q.popleft()
                direcitons = [[1, 0], [-1, 0], [0, 1], [0, -1]]
                for dr, dc in direcitons:
                    r, c = row + dr, col + dc
                    if r in range(ROWS) and c in range(COLS) and grid[r][c] == "1" and (r, c) not in visit:
                        q.append((r, c))
                        visit.add((r, c))
        
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == "1" and (r, c) not in visit:
                    bfs(r, c)
                    islands += 1
        return islands
    
# from typing import List

# class Solution:
#     def numIslands(self, grid: List[List[int]]) -> int:
#         ROWS, COLS = len(grid), len(grid[0])
#         visit = set()
        
#         def dfs(r, c):
#             if r < 0 or r == ROWS or c < 0 or c == COLS or (r, c) in visit or grid[r][c] == 0:
#                 return
            
#             visit.add((r, c))
            
#             neighbors = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]]
#             for nr, nc in neighbors:
#                 dfs(nr, nc)
                
#         count = 0
#         for r in range(ROWS):
#             for c in range(COLS):
#                 if grid[r][c] and (r, c) not in visit:
#                     dfs(r, c)
#                     count += 1
#         return count
    
obj = Solution()
print(obj.numIslands([['1','1','1','0','0'],['1','1','0','0','0'],['1','1','0','0','0'],['0','0','0','1','1']]))