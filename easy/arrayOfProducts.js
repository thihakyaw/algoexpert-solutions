function arrayOfProducts(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let temp = 1;
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                temp = temp * array[j];
            }
        }
        result.push(temp);
    }
    return result;
}


console.log(arrayOfProducts([9, 3, 2, 1, 9, 5, 3, 2]))