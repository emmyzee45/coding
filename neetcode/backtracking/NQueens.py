from typing import List

class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        res = []
        COLS = set()
        posDiag = set()
        negDiag = set()
        board = [["."] * n for i in range(n)]

        def backtrack(r):
            if r == n:
                res.append(["".join(row) for row in board])
                return
            
            for c in range(n):
                if c in COLS or (r + c) in posDiag or (r - c) in negDiag:
                    continue
                
                COLS.add(c)
                posDiag.add((r + c))
                negDiag.add((r - c))
                board[r][c] = "Q"

                backtrack(r + 1)

                COLS.remove(c)
                posDiag.remove((r + c))
                negDiag.remove((r - c))
                board[r][c] = "."
                
        backtrack(0)
        return res

obj = Solution()
print(obj.solveNQueens(4))