function absoluteValuesSumMinimization(a) {
let len = a.length
let obj = {}
let amtNow = 0
let amtBefore
let answer
for(let i = 0; i< len; i++) {
    for (let x = 0; x< len; x++) {
        amtNow += Math.abs(a[x] - a[i])
    }
    if (amtBefore === undefined || amtNow < amtBefore ) {
        amtBefore = amtNow
        answer = a[i]

    }
    amtNow = 0
}
return answer
}

// The median way
function absoluteValuesSumMinimization(a) {
    return a[Math.ceil(a.length/2)-1];
}
