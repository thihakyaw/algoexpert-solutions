function twoNumberSum(array, targetSum) {  
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] == targetSum && i != j && result.lenght != 0) {
                result.push(array[i]);
                result.push(array[j]);
            }
        }
    }

    return  [...new Set(result)];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
// Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;
