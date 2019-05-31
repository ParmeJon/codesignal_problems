function validTime(time) {
    let hr = parseInt(time.split(':')[0])
    let min = parseInt(time.split(':')[1])
    if (hr >= 24 || hr < 0) {
        return false
    }
    if (min >= 60 || min < 0) {
        return false
    }
    return true
}
