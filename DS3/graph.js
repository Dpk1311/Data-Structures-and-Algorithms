class Graph {
    constructor() {
        this.graph = []
    }

    addvertex(vertex){
        if (!this.graph[vertex]) {
            this.graph[vertex] = new Set()
        }
    }
    addedge(vertex1, vertex2) {
        if (!this.graph[vertex1]) {
            this.addvertex(vertex1)
        }
        if (!this.graph[vertex2]) {
            this.addvertex(vertex2)
        }

        this.graph[vertex1].add(vertex2)
        this.graph[vertex2].add(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.graph[vertex1].delete(vertex2)
        this.graph[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.graph[vertex]) return null

        for (let delVertex of this.graph) {
            this.removeEdge(vertex, delVertex)
        }

        delete this.graph[vertex]
    }

    hasedge(vertex1, vertex2) {
        return this.graph[vertex1].has(vertex2) && this.graph[vertex2].has(vertex1)
    }

    display() {
        for (let vertex in this.graph) {
            console.log(vertex + '->' + [...this.graph[vertex]]);
        }
    }

    dfs(start) {
        let stack = [start];
        let visited = new Set([start]);
        let data = [];

        while (stack.length) {
            let current = stack.pop();
            data.push(current);

            for (let neighbour of this.graph[current]) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    stack.push(neighbour);
                }
            }
        }
        console.log('Data:', data);
    }

    bfs(start){
        let queue = [start]
        let visited = new Set([start])
        let data = []

        while(queue.length){
            let current = queue.shift()
            data.push(current)

            for(let neighbour of this.graph[current]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
        console.log("BFS data",data);
    }

}



const graph = new Graph()

graph.addvertex("a")
graph.addvertex("b")
graph.addvertex("c")


graph.addedge("a", "b")
graph.addedge("b", "c")
// graph.dfs("a")
// graph.bfs("a");
// console.log(graph.hasedge("a","c"));
// console.log(graph.removeEdge("a","b"));
graph.removeVertex("b")
graph.display()