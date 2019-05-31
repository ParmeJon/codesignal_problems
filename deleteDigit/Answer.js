function deleteDigit(n) {
let nString = n.toString()
let highestNum = 0
    for (let i = 0; i < nString.length; i++) {
        if (parseInt(nString.slice(0, i) + nString.slice(i+1)) > highestNum) {
            highestNum = parseInt(nString.slice(0, i) + nString.slice(i+1))
        }
    }
    return highestNum
}
// working?
