const depthFirstPrint = (graph, source) => {

    const stack = [source];
    const result = [];

    while (stack.length > 0) {
        const current = stack.pop();

        for (let neighbor of graph[current]) {
            stack.push(neighbor)
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

console.log(depthFirstPrint(graph, 'a'))