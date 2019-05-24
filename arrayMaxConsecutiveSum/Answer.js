// function arrayMaxConsecutiveSum(inputArray, k) {
//     let highestSum = 0
//     let currentSum = 0
//     for (let i = 0; i < inputArray.length - (k-1); i++) {
//         let j = 0
//         while (j < k) {
//             currentSum += inputArray[i + j]
//             j++
//         }
//         if (currentSum > highestSum) {
//             highestSum = currentSum
//         }
//         currentSum = 0
//     }
//     return highestSum
// }

// more efficient way!
function arrayMaxConsecutiveSum(inputArray, k) {
    let highestSum = 0
    let currentSum = 0
        let j = 0
        while (j < k) {
        currentSum += inputArray[0+j]
        j++
    }
    highestSum = currentSum
    // console.log(currentSum)
    for (let i = 1; i < inputArray.length - (k-1); i++) {
            currentSum -= inputArray[i-1]
            currentSum += inputArray[i+(k-1)]
        if (currentSum > highestSum) {
            highestSum = currentSum
        }

    }
    return highestSum
}
