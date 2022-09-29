function threeNumberSort(array, order) {
    let result = [];
    for (let i = 0; i <= order.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (order[i] == array[j]) {
                result.push(array[j]);
            }
        }
    }

    return result;
}

// Do not edit the line below.
console.log(threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]))
