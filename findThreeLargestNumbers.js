function findThreeLargestNumbers(array) {
    let result = array.sort((a, b) => b - a);

    return [result[2], result[1], result[0]];
}

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));