function isInfiniteProcess(a, b) {
    if (a > b) {
        return true
    }
    return (a + b) % 2 !== 0

}
