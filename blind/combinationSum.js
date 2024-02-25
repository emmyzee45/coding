const combinationSum = (candidates, target) => {

    // candidates.sort((a, b) => a - b);
    // let dp = [[[]]];

    // for(let sum = 0; sum <= target; sum++) {
    //     dp[sum] = [];
    //     let combine = [];

    //     for(let i = 0; i < candidates.length && candidates[i] <= sum; i++) {
    //         if(sum === candidates[i]) {
    //             combine.push([candidates[i]]);
    //         } else {
    //             for(let prev of dp[sum-candidates[i]]) {
    //                 console.log(prev, "||", dp[sum-candidates[i]])
    //                 if(candidates[i] >= prev[prev.length-1]) {
    //                     combine.push([...prev, candidates[i]]);
    //                 }
    //             }
    //         }
    //         dp[sum] = combine;
    //     }
    // }
    // console.log(dp)
    // return dp[target];
    
    let result = [];

    function dfs(index, currentVal, arr) {
        if(currentVal < 0) return;
        if(currentVal === 0) {
            result.push([...arr])
        }

        for(let i = index; i < candidates.length; i++) {
            arr.push(candidates[i]);
            dfs(i, currentVal-candidates[i], arr);
            arr.pop();
        }
    }
    dfs(0, target, []);
    return result;
}

console.log(combinationSum([2,3,6,7], 7))