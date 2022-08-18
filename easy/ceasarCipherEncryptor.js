function caesarCipherEncryptor(string, key) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let array = string.split('');
    for (let i = 0; i < array.length; i++) {
        array[i] = alphabets[(alphabets.indexOf(array[i]) + key) % 26];
    }
    return array.join('');
}

console.log(caesarCipherEncryptor("xyz", 2));