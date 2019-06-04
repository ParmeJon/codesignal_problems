function spiralNumbers(n) {
    let counter = 1
    let col = 0
    let row = 0
    const moves = n * n
    let direction = 'right'
//     creates a matrix of zeros that fit n * n
    let matrix = []
    for (let i = 0; i < n; i++){
        matrix.push([])
        for (let j = 0; j< n; j++) {
            matrix[i].push(0)
        }
    }
    // console.log(matrix)
    for ( let i = 1; i < moves +1; i++) {
        if (matrix[row][col] === 0) {
            matrix[row][col] = i
        }
        // console.log(matrix[row][col+1])
        if (direction === 'right' && (matrix[row][col+1] !== 0 || matrix[row][col+1] === undefined )) {
            // console.log('changed to down')
            direction = 'down'
            }
        if (direction === 'down' && (matrix[row+1] === undefined || matrix[row+1][col] !== 0)) {
            // console.log('changed to left')
            direction = 'left'
        }
        if (direction === 'left' && (matrix[row][col-1] !== 0 || matrix[row][col-1] === undefined)) {
            // console.log('changed to up')
            direction = 'up'
        }
        if (direction === 'up' && (matrix[row-1][col] !== 0 || matrix[row-1] === undefined)) {
            // console.log('changed to right')
            direction = 'right'
        }

        if (direction === 'right') {
            // console.log('right add')
            col += 1
        }
        if (direction === 'down') {
            // console.log('down add')
            row += 1
        }
        if (direction === 'left') {
            // console.log('left add')
            col -= 1
        }
        if (direction === 'up') {
            // console.log('up add')
            row -= 1
        }

    }




return matrix
}
