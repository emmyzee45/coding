const countComponents = (n, edges) => {
    let graph = {};
    let count = 0;
    
    for(let i = 0; i < n; i++) {
        graph[i] = [];
    }

    for(let [e, v] of edges) {
        graph[e].push(v);
        graph[v].push(e);
    }
    
    let visited = new Set();

    function dfs(node) {
        if(visited.has(node)) return 0;
        visited.add(node);
        
        for( let n of graph[node]) {
            dfs(n);
        }
        return 1;
    }

    for(let key in graph) {
        count += dfs(parseInt(key));
    }

    return count;
    // let graph = {};
    // let count = 0;

    // for(let i = 0; i < n; i++) {
    //     graph[i] = new Set();
    // }

    // for(let [e,v] of edges) {
    //     graph[e].add(v);
    //     graph[v].add(e);
    // }

    // let visited = new Set();

    // function dfs(node) {
    //     if(visited.has(node)) return 0;
    //     visited.add(node);

    //     for(let n of graph[node]) {
    //         console.log(n)
    //         dfs(n)
    //     }

    //     return 1;
    // }

    // for(let key in graph) {
    //     count += dfs(parseInt(key))
    // }

    // return count
}

console.log(countComponents(5,[[0,1],[1,2],[3,4]]))