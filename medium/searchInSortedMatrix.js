function searchInSortedMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        let result = binarySearch(matrix[i], target);

        if (result > -1) return [i, result];
    }

    return [-1, -1];
}

function binarySearch(array, target) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let mid = Math.ceil((max + min) / 2);

        if (array[mid] == target) return mid;
        if (array[mid] > target) max = mid - 1;
        if (array[mid] < target) min = mid + 1;
    }

    return -1;
}

let matrix = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
];

let target = 44;
// Do not edit the line below.
console.log(searchInSortedMatrix(matrix, target))
