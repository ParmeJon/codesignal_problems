function stringsRearrangement(inputArray) {
// need to create permutations of inputArray and immediately break if oneLetterOff returns false.
let permutations = permutator(inputArray)
  for (let i = 0; i < permutations.length; i++) {
    let count = 0
      // console.log(permutations[i])
    for (let j = 0; j < permutations[0].length - 1; j++) {
      // console.log(permutations[i][j])
      if (!oneLetterOff(permutations[i], j)) {
        break;
      } else {
        count+= 1
        // console.log(count)
      }
      if (count === permutations[0].length - 1) {
        return true
      }
    }

  }
  return false
}



const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}


// create a function that identifies if element and later element is only 1 letter off
//  expects an array
function oneLetterOff(array, currentIdx) {
    let count = 0
    for (let i = 0; i< array[currentIdx].length; i++) {
    // console.log(array[currentIdx][i], "compared with", array[currentIdx +1][i])
        if (array[currentIdx][i] != array[currentIdx + 1][i]) {
            count += 1
        }
      // console.log(count)
    }
    return count === 1
}
