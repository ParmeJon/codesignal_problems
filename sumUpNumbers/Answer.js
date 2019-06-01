function sumUpNumbers(inputString) {
    let sum = 0
    let newString = ''
    for (let i = 0; i < inputString.length; i++) {
        if (!isNaN(inputString[i])) {
            newString += inputString[i]
        } else {
            newString += ' '
        }
    }
    newString.split(' ').filter(x => x !== '').map(x=> parseInt(x)).forEach(x => sum += x)
    return sum
}
