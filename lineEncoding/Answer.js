function lineEncoding(s) {
    let sArray = s.split('')
    let newArray = []
    let count = 1
    for (let i = 1; i < sArray.length + 1; i++) {
        if (sArray[i] === sArray[i-1]) {
            count += 1
        } else if (count > 1 && sArray[i] !== sArray[i-1]) {
            newArray.push(count + sArray[i-1])
            count = 1
        } else {
            newArray.push(sArray[i-1])
        }
    }
    return newArray.join('')
}
