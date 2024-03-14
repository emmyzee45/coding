const mergeIntervals = (intervals) => {
    // let dp = [intervals[0]];
    // let pointer = 0;

    // intervals.sort((a,b) => a-b);

    // for(let i = 1; i < intervals.length; i++) {
    //    if(intervals[i][0] <= intervals[i-1][1]) {
    //     let start = Math.min(intervals[i][0], intervals[i-1][0]);
    //     let end = Math.max(intervals[i][1], intervals[i-1][1]);
    //     dp[pointer] = [start,end];
    //     pointer++;
    //    } else {
    //     dp.push(intervals[i]);
    //     pointer++;
    //    }
    // }
    // return dp;

    let start = 0;
    let end = 1;
    let previous = intervals[0];
    let res = [previous];

    for(let current of intervals) {
        if(current[start] <= previous[end]){
            previous[end] = Math.max(current[end], previous[end]);
        } else {
            res.push(current);
            previous = current;
        }
    }
    return res;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))