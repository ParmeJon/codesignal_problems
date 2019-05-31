function chessKnight(cell) {
let posX = cell[0].charCodeAt() - 97
let posY = parseInt(cell[1])
let count = 0
    if (isValid(posX+2, posY -1)) {
        count += 1
    }
    if (isValid(posX+2, posY+1)) {
        count += 1
    }
    if (isValid(posX+1, posY+2)) {
        count += 1
    }
    if (isValid(posX-1, posY+2)) {
        count +=1
    }
    if (isValid(posX-2, posY+1)) {
        count += 1
    }
    if (isValid(posX-2, posY-1)) {
        count += 1
    }
    if (isValid(posX+1, posY-2)) {
        count+= 1
    }
    if (isValid(posX-1, posY-2)) {
        count += 1
    }
    return count
}

function isValid(x, y) {
    if (x > 7 || x < 0) {
        return false
    }
    if (y > 8 || y < 1) {
        return false
    }
    return true
}
