function digitsProduct(product) {
    if (product === 0) {
        return 10
    }
    if (product === 1) {
        return 1
    }
    let result = []
    for (let factor = 9; factor >= 2; factor--) {
        while (product % factor === 0) {
            result.unshift(factor)
            product /= factor
        }
        console.log(result)
    }
    return product > 1 ? -1 : parseInt(result.join(''))
}
