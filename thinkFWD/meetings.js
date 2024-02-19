function canAttendMeetings(intervals) {
    if(intervals.length < 2) return true;
    intervals.sort((a,b) => a[0] - b[0])
    let end = intervals[0][1];

    for(let i = 1; i < intervals.length; i++) {
        if(end > intervals[i][1]) return false;
        if(end < intervals[i][1]) end = intervals[i][1];
    }
    return true;

}

console.log(canAttendMeetings([[7,10],[2,4],[15,20]]))