function moveElementToEnd(array, toMove) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == toMove) {
            result.push(array[i]);
        } else {
            result.unshift(array[i]);
        }
    }

    return result;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))
