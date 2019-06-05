function sudoku2(grid) {
    for (let i = 0; i < 9; i++) {
        let rowCheck = []
        let colCheck = []
            for (let j = 0; j< 9; j++) {
                if (rowCheck.includes(grid[i][j])) {
                    return false
                }
                if (colCheck.includes(grid[j][i])) {
                    return false
                }
                if (grid[i][j] !== '.') {
                    rowCheck.push(grid[i][j])
                }
                if (grid[j][i] !== '.') {
                    colCheck.push(grid[j][i])
                }
            }
        rowCheck = []
        colCheck = []
    }

    let level = 0
    let forward = 0
    let boxCheck = []
    for (let h = 0; h < 9; h++)  {

      for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
            if (boxCheck.includes(grid[i+level][j+forward])) {
                return false
            }
            if (grid[i + level][j + forward] !== '.') {
            boxCheck.push(grid[i + level][j + forward])
            }
         }
      }

      boxCheck = []
      if (forward !== 6) {
       forward += 3
      } else {
         forward = 0
         level += 3
      }
    }
    return true
}
