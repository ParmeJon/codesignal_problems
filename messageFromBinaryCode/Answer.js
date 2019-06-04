function messageFromBinaryCode(code) {
let codeArr = []
let word = ''
    for (let i = 0; i < code.length; i += 8) {
        codeArr.push(code.slice(i, i+8))
    }
    for (let i = 0; i< codeArr.length; i++) {
        word += String.fromCharCode(parseInt(codeArr[i], 2))
    }
    return word
}
