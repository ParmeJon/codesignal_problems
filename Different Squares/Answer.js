function differentSquares(matrix) {
    let matrixSquares = []
    if (matrix.length < 2 || matrix[0].length < 2) {
        return 0
    }
    for (let i = 0; i< matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            if (!matrixSquares.includes(matrix[i][j].toString() + matrix[i][j+1].toString() + matrix[i+1][j].toString() + matrix[i+1][j+1].toString())){
                matrixSquares.push(matrix[i][j].toString() + matrix[i][j+1].toString() + matrix[i+1][j].toString() + matrix[i+1][j+1].toString())
            }
        }
    }
    return matrixSquares.length
}
