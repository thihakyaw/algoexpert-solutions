const breadthFirstPrint = (graph, source) => {

    const queue = [source];
    const result = [];

    while (queue.length > 0) {
        const current = queue.shift();

        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        } 
        result.push(current);
    }
    
    return result;
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log(breadthFirstPrint(graph, 'a'))