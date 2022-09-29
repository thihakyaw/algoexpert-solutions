function tournamentWinner(competitions, results) {
    let hash = {};

    for (let i = 0; i <= competitions.length; i++) {
        if (results[i] == 0) {
            if (hash[competitions[i][1]]) {
                hash[competitions[i][1]] += 3;
            } else {
                hash[competitions[i][1]] = 3;
            }
            
        } else if (results[i] == 1) {
            if (hash[competitions[i][0]]) {
                hash[competitions[i][0]] += 3;
            } else {
                hash[competitions[i][0]] = 3;
            }
        }
    }

    return Object.entries(hash).sort((a, b) => b[1]-a[1])[0][0];
}

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
];

let results = [0, 0, 1];

console.log(tournamentWinner(competitions, results));