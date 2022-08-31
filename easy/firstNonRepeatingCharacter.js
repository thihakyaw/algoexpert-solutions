function firstNonRepeatingCharacter(string) {
    let hash = {}
    for (let i = 0; i < string.length; i++) {
        if (hash[string[i]]) {
            hash[string[i]].count++;
        } else {
            hash[string[i]] = {
                index: i,
                count: 1
            };
        }
    }

    for (let [key, value] of Object.entries(hash)) {
        if (value.count == 1) {
            return value.index
        }
    }

    return -1;
}

console.log(firstNonRepeatingCharacter('ggyllaylacrhdzedddjsc'));