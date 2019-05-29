function electionsWinners(votes, k) {
    let maxNum = Math.max(...votes)
    let count = 0
    if (k === 0 && votes.indexOf(maxNum) === votes.lastIndexOf(maxNum)) {
        return 1
    }
    for (let i = 0; i < votes.length; i++) {
        if(votes[i] + k > maxNum) {
            count += 1
        }
    }
    return count
}
