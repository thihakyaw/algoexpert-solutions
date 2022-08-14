function isValidSubsequence(array, sequence) {
    let length = 0;

    for (let i = 0; i < array.length; i++) {
        if (length === sequence.length) {
            break;
        } 
        if (array[i] === sequence[length] && length < sequence.length) {
            length++;
        }
    }

    return length === sequence.length
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))