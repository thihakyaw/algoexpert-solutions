function runLengthEncoding(string) {
    let hash = {};
    let result = '';

    for (s of string) {
        if (hash[s]) {
            hash[s].count++
        } else {
            hash[s] = { index:s, count: 1 }
        }
    }
    for (let [key, value] of Object.entries(hash)) {
        if (value.count > 9) {
            while (value.count > 0) {
                if (value.count > 9) {
                    result += 9 + value.index;
                    value.count -= 9;
                }
                if (value.count < 9) {
                    result += value.count + value.index;
                    value.count = 0
                }
            }
        } else {
            result += value.count + value.index;
        }
    }
    return result;
}

console.log(runLengthEncoding("AAAAAAAAAAAAAAAAAAAA"))