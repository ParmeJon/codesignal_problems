function circleOfNumbers(n, firstNumber) {
let half = n/2
    if (firstNumber < half) {
        firstNumber += half
    } else {
        firstNumber -= half
    }
    return firstNumber
}

function circleOfNumbers2(n, firstNumber) {
let oppositeChange = n/2
if (firstNumber === oppositeChange) {
    return 0
}
return (firstNumber > oppositeChange) ? (firstNumber - oppositeChange) : (firstNumber + oppositeChange)

}
