from typing import Counter

class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        count = Counter(tiles)

        def backtrack():
            res = 0

            for c in count:
                print(c, count[c])
                if count[c] > 0:
                    count[c] -= 1
                    res += 1
                    res += backtrack()
                    count[c] += 1
            return res
        return backtrack()
    
obj = Solution()
print(obj.numTilePossibilities("AAB"))