const findContentChildren = (s, g) => {
    console.log(s, g)
    s.sort();
    g.sort();
    let solution = 0;
    let greedCount = 0;

    for(let cookies of s) {
        if(cookies >= g[greedCount]) {
            solution += 1;
            greedCount +=1;
        }
    }
    return solution;
}
// react-scripts start
findContentChildren([1,2,3],[1,1])