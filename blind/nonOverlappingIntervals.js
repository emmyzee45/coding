var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a,b) => a[1] - b[1]);
    // let count = 0;
    // let end = intervals[0][1];

    // for(let i = 1; i < intervals.length; i++) {
    //     if(end > intervals[i][0]) {
    //         count++;
    //         continue
    //     };
    //     end = intervals[i][1];
    // }

    // return count;
    let count = 0;
    let prev = 0;

    for(let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        if(current[0] < intervals[prev][1]) {
            count++;
        } {
            prev = i;
        }
    }
    return count;
}

console.log(eraseOverlapIntervals([[1,2],[2,3],[1,3],[3,4]]))