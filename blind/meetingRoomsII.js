var minMeetingRooms = function(intervals) {

    if(!intervals || intervals.length < 1) {
        return 0;
    }

    const starts = intervals.map((interval) => interval[0]).sort((a,b) => a-b);
    const ends = intervals.map((interval) => interval[1]).sort((a,b) => a-b);

    let rooms = 0;
    let end = 0;
    console.log(starts)
    console.log(ends)
    for(let i = 0; i < intervals.length; i++) {
        if(starts[i] < ends[end]) {
            rooms++;
        } else {
            end++;
        }
    }
    return rooms;
}

console.log(minMeetingRooms([[0,30],[5,10],[15,20]]))