// const insert = (intervals, newIntervals) => {
//     let res = [];
//     let i = 0;

//     const start = 0;
//     const end = 1;

//     while(i < intervals.length && intervals[i][end] < newIntervals[start]) {
//         res.push(intervals[i]);
//         i++;
//     }

//     while(i < intervals.length && intervals[i][start] <= newIntervals[end]) {
//         newIntervals[start] = Math.min(newIntervals[start], intervals[i][start]);
//         newIntervals[end] = Math.max(newIntervals[end], intervals[i][end]);
//         i++;
//     }

//     res.push(newIntervals);

//     while( i < intervals.length) {
//         res.push(intervals[i]);
//         i++;
//     }

//     return res;
// }

const insert = (intervals, newIntervals) => {
    let res = [];
    let start = 0;
    let end = 1;
    let i = 0;

    while( i < intervals.length && intervals[i][end] < newIntervals[start]) {
        res.push(intervals[i]);
        i++;
    }

    while(i < intervals.length && intervals[i][start] <= newIntervals[end]) {
        newIntervals[start] = Math.min(newIntervals[start], intervals[i][start]);
        newIntervals[end] = Math.max(newIntervals[end], intervals[i][end]);
        i++;
    }
    
    res.push(newIntervals);
    while(i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }

    return res;
}

console.log(insert([[1,2], [3,5], [6,7], [8,10], [12,16]],[4,8]))