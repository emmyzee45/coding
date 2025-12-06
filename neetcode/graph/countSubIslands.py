from typing import List


class Solution:
    def countSubIslands(self, grid1: List[List[int]], grid2: List[List[int]]) -> int:
        ROWS, COLS = len(grid1), len(grid1[0])
        visit = set()
        
        # def dfs(r, c):
        #     if r < 0 or r == ROWS or r < 0 or c == COLS or (r, c) in visit or grid2[r][c] == 0:
        #         return True
            
        #     visit.add((r, c))
        #     res = True
        #     if grid1[r][c] == 0:
        #         res = False
            
        #     visit.add((r, c))
            
        #     res = dfs(r + 1, c) and res
        #     res = dfs(r - 1, c) and res
        #     res = dfs(r, c + 1) and res
        #     res = dfs(r, c - 1) and res
        #     return res

        def dfs(r, c):
            if r < 0 or r == ROWS or r < 0 or c == COLS or (r, c) in visit or not grid2[r][c]:
                return True
            if not grid1[r][c]:
                return False
            
            visit.add((r, c))
            
            res = (dfs(r + 1, c) and
            dfs(r - 1, c) and
            dfs(r, c + 1) and
            dfs(r, c - 1))
            return res
        
        count = 0
        for r in range(ROWS):
            for c in range(COLS):
                if grid1[r][c] and grid2[r][c] and (r, c) not in visit:
                    if dfs(r, c):
                        count += 1
        return count


obj = Solution()
print(obj.countSubIslands(
    [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]],
    [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0],
        [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]]
))
