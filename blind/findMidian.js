const MidianFinder = function() {
    this.arr = [];
}

MidianFinder.prototype.addNum = function(num) {
    let left = 0;
    let right = this.arr.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right)/2);
      
        if(num > this.arr[mid]) {
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    this.arr.splice(left, 0, num);
}

MidianFinder.prototype.findMidian = function() {

    if(this.arr.length % 2 === 0) {
        let mid = this.arr.length / 2;
        return this.arr[mid] + this.arr[mid-1] /2;
    } else {
        let mid = Math.floor(this.arr.length/2);
        return this.arr[mid];
    }
}

const midian = new MidianFinder();
midian.addNum(1)
midian.addNum(2)
midian.addNum(4)
midian.addNum(3)
console.log(midian.findMidian())
console.log(midian.findMidian())