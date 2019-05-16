function alphabeticShift(inputString) {
let charCodeInput = inputString.split('').map(x => {
    if (x !== 'z') {
    return x.charCodeAt() + 1
    } else {
        return 97
    }
})
    return charCodeInput.map(x => String.fromCharCode(x)).join('')
}
