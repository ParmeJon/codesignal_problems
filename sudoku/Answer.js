function sudoku(grid) {
   let correct = '123456789'
   let colCheck = []
   let boxCheck= 0
   for (let i = 0; i < grid.length; i++) {
      if ([...grid[i]].sort().join('') !== correct) {
         return false
      }
      for (let j = 0; j < grid[i].length; j++) {
         colCheck.push(grid[j][i])

      }
      if (colCheck.sort().join('') !== correct) {
         return false
      } else {
         colCheck = []
      }
   }
//    check each 3 x 3 sub grid
   let level = 0
   let forward = 0
    for (let h = 0; h < 9; h++)  {
      for (let i = 0; i < 3; i++) {
         for (let j = 0; j < 3; j++) {
            boxCheck += grid[i + level][j + forward]
         }
      }
      if (boxCheck !== 45) {
            console.log('boxcheck error')
            return false
      } else {
            boxCheck = 0
      }
      if (forward !== 6) {
       forward += 3
      } else {
         forward = 0
         level += 3
      }
    }
   return true
}
