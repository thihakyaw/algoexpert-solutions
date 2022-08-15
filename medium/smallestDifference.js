function smallestDifference(arrayOne, arrayTwo) {
    let result = {
        firstNumber: undefined,
        secondNumber: undefined,
        difference: Infinity
    }
    
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (arrayOne[i] > arrayTwo[j]) {
                let newDifference = arrayOne[i] - arrayTwo[j];
                if (newDifference < result.difference) {
                    result.firstNumber = arrayOne[i];
                    result.secondNumber = arrayTwo[j];
                    result.difference = newDifference;
                }
            } else if (arrayOne[i] < arrayTwo[j]) {
                let newDifference = arrayTwo[j] - arrayOne[i];
                if (newDifference < result.difference) {
                    result.firstNumber = arrayOne[i];
                    result.secondNumber = arrayTwo[j];
                    result.difference = newDifference;
                }
            } else if (arrayOne[i] == arrayTwo[j]) {
                result.firstNumber = arrayOne[i];
                result.secondNumber = arrayTwo[j];
                result.difference = 0;
            }
        }
    }

    return [result.firstNumber, result.secondNumber];
}

console.log(smallestDifference([240, 124, 86, 111, 2, 84, 954, 27, 89], [1, 3, 954, 19, 8]))
