function chessBoardCellColor(cell1, cell2) {
let obj = {}
let range = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
let colored1 = ['1','3','5','7']
let colored2 = ['2','4','6','8']
    for (let i = 0; i < range.length; i++) {
        if (i % 2 === 0) {
        obj[range[i]] = colored1
        } else {
            obj[range[i]] = colored2
        }
    }
    return obj[cell1[0]].includes(cell1[1]) === obj[cell2[0]].includes(cell2[1])
}
