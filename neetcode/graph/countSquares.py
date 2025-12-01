from typing import List, DefaultDict

class Solution:
    # def countSquares(self, matrix: List[List[int]]) -> int:
    #     ROWS, COLS = len(matrix), len(matrix[0])
    #     dp = DefaultDict(int)
    #     res = 0
        
    #     for r in range(ROWS):
    #         for c in range(COLS):
    #             if matrix[r][c]:
    #                 dp[(r, c)] = 1 + min(
    #                     dp[(r - 1, c)],
    #                     dp[(r, c - 1)], 
    #                     dp[(r - 1, c - 1)]
    #                 )
    #                 res += dp[(r, c)]
    #     return res
        
    def countSquares(self, matrix: List[List[int]]) -> int:
        ROWS, COLS = len(matrix), len(matrix[0])
        cache = {}
        def dfs(r, c):
            if r == ROWS or COLS == c or not matrix[r][c]:
                return 0
            if (r, c) in cache:
                return cache[(r, c)]
            
            cache[(r, c)] = 1 + min(
                dfs(r + 1, c),
                dfs(r, c + 1),
                dfs(r + 1, c + 1)
            )
            
            return cache[(r, c)]
        
        res = 0
        for r in range(ROWS):
            for c in range(COLS):
                res += dfs(r, c)
                
        return res
    
obj = Solution()
print(obj.countSquares([[0,1,1,1],[1,1,1,1],[0,1,1,1]]))