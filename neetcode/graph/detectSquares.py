from typing import DefaultDict, List
class DectectSquares:
    def __init__(self):
        self.ptsCount = DefaultDict(int)
        self.pts = []
        
    def add(self, point: List[int]) -> None:
        self.ptsCount[tuple(point)] += 1
        self.pts.append(point)
    
    def count(self, point: List[int]) -> int:
        res = 0
        px, py = point
        for x, y in self.pts:
            if abs(py - y) != abs(px - x) or px == x or py == y:
                continue
            res += self.ptsCount[(x, py)] * self.ptsCount[(py, x)]
        return res