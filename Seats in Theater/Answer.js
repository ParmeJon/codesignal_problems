function seatsInTheater(nCols, nRows, col, row) {
    const totalSeats = (nCols - (col-1)) * (nRows - row)
    return totalSeats
}
