function phoneCall(min1, min2_10, min11, s) {
let minsCounter = 0
    s -= min1
    if (s >= 0) {
        minsCounter += 1
    }
    for (let i = 0; i < 9; i++) {
        s -= min2_10
        console.log(s)
        if (s >= 0) {
         minsCounter+= 1
        } else {
            break
        }
    }
    while (s > 0) {
        s -= min11
        if (s >= 0) {
            minsCounter += 1
        } else {
            break
        }
    }
    return minsCounter
}
