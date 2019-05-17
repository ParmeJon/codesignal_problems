function circleOfNumbers(n, firstNumber) {
let half = n/2
    if (firstNumber < half) {
        firstNumber += half
    } else {
        firstNumber -= half
    }
    return firstNumber
}
