function minMeetingRooms(intervals) {
    if(intervals.length < 2) return 1;
    intervals.sort((a,b) => a[0] - b[0]);

    let roomTime = [intervals[0][1]];
    for(let i = 1; i < intervals.length; i++) {
        let [start, end] = [...intervals[i]]
        let earliest = Math.min(...roomTime);

        if(start < earliest) {
            roomTime.push(end);
        } else {
            roomTime[roomTime.indexOf(earliest)] = end;
        }
    }
    return roomTime.length;
}

console.log(minMeetingRooms([[0,30],[1,5],[2,3], [7, 10]]))