function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] == target) return mid;
        else if (array[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))