export function reverse(board, column) {
    // For the given column
    // Swap values of cells in the column
    //  Start with the first and last cells with a value
    //  Swap their values
    //  Move to the next cells inwards
    //  Stop when the two cells meet
    // Return the board
    // Find the first and last cells with a value
    const columnCells = board.filter((c) => c.col === column);

    if (columnCells.every((c) => c.value === 0)) return board;

    const firstCell = columnCells.find((c) => c.value !== 0);
    const lastCell = columnCells.reverse().find((c) => c.value !== 0);
    console.log(firstCell, lastCell);

    // Swap their values in board
    const firstValue = firstCell.value;
    board[firstCell.index].value = lastCell.value;
    board[lastCell.index].value = firstValue;
    console.log(board[firstCell.index], board[lastCell.index]);

    // Move to the next cells inwards on the same column
    // Stop when the two cells meet
    let i = firstCell.index + 7;
    let j = lastCell.index - 7;
    while (i < j) {
        // Swap values
        const temp = board[i].value;
        board[i].value = board[j].value;
        board[j].value = temp;
        i += 7;
        j -= 7;
    }

    return board;
}
