function generateDocument(characters, document) {
    document = document.split('');
    characters = characters.split('');
    for (d of document) {
        console.log({
            document, characters
        })
        if (!characters.includes(d)) {
            return false;
        }
        characters.splice(characters.indexOf(d) , 1);
    }
    return true;
}

console.log(generateDocument("aheaolabbhb", "hello"))