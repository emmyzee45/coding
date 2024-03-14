var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let end = 1;
    let start = 0;

    for(let i = 0; i < intervals.length -1; i++) {
        if(intervals[i][end] > intervals[i+1][start]) {
            return false
        }
    }
    return true;
    
}

console.log(canAttendMeetings([[0,30],[5,10],[15,20]]))
