// Defination of Node
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

var cloneGraph = function(node) {
    let visited = {};

    function dfs(node) {
        // base case
        if(!node) return node;
        if(!!visited[node.val]) return visited[node.val];

        let root = new Node(node.val);
        visited[node.val] = root;
        console.log(visited)
        //occurence relation
        console.log(node)
        for(let neighbor of node.neighbors) {
            root.neighbors.push(dfs(neighbor))
        }
        return root;
    }
    return dfs(node);
}
const adjList = [[2,4],[1,3],[2,4],[1,3]]
console.log(cloneGraph(adjList))