function isCryptSolution(crypt, solution) {
    let solutionObj = {}
    for (let i = 0; i < solution.length; i++) {
        solutionObj[solution[i][0]] = solution[i][1]
    }

    let word1 = ''
    let word2 = ''
    let word3 = ''
    for (let i = 0; i < crypt.length; i++) {
        if (solutionObj[crypt[i][0]] === "0" && crypt[i].length > 1) {
                return false
        }
        for (let j = 0; j< crypt[i].length; j++) {
            switch(i) {
                case 0:
                 word1 += solutionObj[crypt[i][j]];
                 break;
                case 1:
                 word2 += solutionObj[crypt[i][j]];
                 break;
                case 2:
                 word3 += solutionObj[crypt[i][j]];
                 break;
            }
        }
    }
    return +word1 + +word2 === +word3
}
