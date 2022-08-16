function bubbleSort(array) {
    let isSorted = false;
    let counter = 0;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
                isSorted = false;
            }
        }
        counter++;
    }
    return array;
}

//RECURSIVE
// function bubbleSort(array) {
//     let swaps = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > array[i + 1]) {
//             [array[i], array[i + 1]] = [array[i + 1], array[i]];
//             swaps++;
//         }
//     }
//     return swaps ===0 ? array : bubbleSort(array)
// }

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))