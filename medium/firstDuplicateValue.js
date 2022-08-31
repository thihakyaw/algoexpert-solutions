function firstDuplicateValue(array) {
    let hash = [];
    
    for (let i = 0; i < array.length; i++) {
        if (hash.includes(array[i])) {
            return array[i];
        } else {
            hash.push(array[i])
        }
    }
    return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]))
