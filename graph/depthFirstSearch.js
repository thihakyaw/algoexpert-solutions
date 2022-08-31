const hasPath = (graph, source, dst) => {
    if (source == dst) return true;
    for (let neighbor of graph[source]) {
        if (hasPath(graph, neighbor, dst)) {
            return true;
        }
    }
    return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

console.log(hasPath(graph, 'f', 'k'))