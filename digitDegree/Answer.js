function digitDegree(n) {
    if (n < 10) {
        return 0
    }
    let count = 0
    let currentNum = 0
    let newNum = n
    while (newNum >= 10) {
        for (let i = 0; i < newNum.toString().length; i++) {
                currentNum += parseInt(newNum.toString()[i])
        }
        newNum = currentNum
        currentNum = 0
        count += 1
    }
    return count


}
