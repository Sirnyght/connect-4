export function checkWin(board, cell) {
    // Check for horizontal win
    // Check for vertical win
    // Check for diagonal win
    // Check for tie
    // Return 0 for no win, 1 for player 1 win, 2 for player 2 win, and 3 for tie
    const t = tie(board);
    const h = hor(board, cell);
    const v = vert(board, cell);
    const d = diag(board, cell);

    if (t[0]) return t;
    if (h[0]) return h;
    if (v[0]) return v;
    if (d[0]) return d;

    return 0;
}

function hor(board, cell) {
    // Check for horizontal win
    // If there are four cells in a row with the same value, return that value and the array of winning cells
    // Otherwise, return 0
    const left = next(board, cell, 'left');
    const right = next(board, cell, 'right');
    // concat left and right and ignore duplicates
    const hor = [...new Set(left.concat(right))];
    if (hor.length >= 4) {
        return [hor[0].value, hor];
    }
    return 0;
}

function vert(board, cell) {
    // Check for vertical win
    // If there are four cells in a column with the same value, return that value
    // Otherwise, return 0
    const up = next(board, cell, 'up');
    const down = next(board, cell, 'down');
    // concat up and down and ignore duplicates
    const vert = [...new Set(up.concat(down))];
    if (vert.length >= 4) {
        return [vert[0].value, vert];
    }
    return 0;

}

function diag(board, cell) {
    // Check for diagonal win
    // If there are four cells in a diagonal with the same value, return that value
    // Otherwise, return 0
    const upLeft = next(board, cell, 'up-left');
    const downRight = next(board, cell, 'down-right');
    const upRight = next(board, cell, 'up-right');
    const downLeft = next(board, cell, 'down-left');
    
    // concat upLeft and downRight and ignore duplicates
    const diag1 = [...new Set(upLeft.concat(downRight))];
    // concat upRight and downLeft and ignore duplicates
    const diag2 = [...new Set(upRight.concat(downLeft))];

    if (diag1.length >= 4) {
        return [diag1[0].value, diag1];
    }
    if (diag2.length >= 4) {
        return [diag2[0].value, diag2];
    }
    return 0;
}

function tie(board) {
    function checkTie(board, cell) {
        const h = hor(board, cell);
        const v = vert(board, cell);
        const d = diag(board, cell);
    
        if (h[0] !== 0) return h;
        if (v[0] !== 0) return v;
        if (d[0] !== 0) return d;
    
        return 0;
    }

    // Check for tie
    // If there are no more empty cells, return 3
    // Otherwise, return 0
    const emptyCells = board.filter((c) => c.value === 0);
    if (emptyCells.length === 0) {
        return [3, []];
    }
    // If there are two winners, return 3
    // Otherwise, return 0
    // For each non empty cell in board, check if there is a win
    // If there is two win or more by different player at the end of the loop, return 3
    // Otherwise, return 0
    const nonEmptyCells = board.filter((c) => c.value !== 0);
    let winner = 0;
    let lastWinner = 0;
    nonEmptyCells.forEach((c) => {
        const w = checkTie(board, c);
        if (w[0]) {
            if (w[0] !== lastWinner) {
                winner++;
                lastWinner = w[0];
            }
        }
    });
    if (winner >= 2) {
        return [3, []];
    }

    return 0;
}

function next(board, cell, dir) {
    // Check for the four next cells in the given direction, if they exist, to avoid index out of bounds errors
    // If they do, return them
    // Otherwise, return null
    let currentCell = cell;
    // Initialize nextCell based on dir and currentCell
    let nextCell = getNextCell(board, currentCell, dir);
    let cellArray = [currentCell];
    for (let i = 0; i < 3; i++) {
        // If currentCell value is not null and the nextCell is not null and the nextCell has the same value as the currentCell, return the nextCell
        if (currentCell.value !== null && nextCell && currentCell.value === nextCell.value) {
            cellArray.push(nextCell);
            currentCell = nextCell;
            nextCell = getNextCell(board, currentCell, dir);
        }
    }
    return cellArray;
}

function getNextCell(board, currentCell, dir) {
    // Return nextCell based on dir
    // If dir is 'up', nextCell is the cell above currentCell
    // If dir is 'down', nextCell is the cell below currentCell
    // If dir is 'left', nextCell is the cell to the left of currentCell
    // If dir is 'right', nextCell is the cell to the right of currentCell
    // If dir is 'up-left', nextCell is the cell above and to the left of currentCell
    // If dir is 'up-right', nextCell is the cell above and to the right of currentCell
    // If dir is 'down-left', nextCell is the cell below and to the left of currentCell
    // If dir is 'down-right', nextCell is the cell below and to the right of currentCell
    // Otherwise, return null
    let nextCell = null;
    switch (dir) {
        case 'up':
            nextCell = board.find((c) => c.row === currentCell.row - 1 && c.col === currentCell.col);
            break;
        case 'down':
            nextCell = board.find((c) => c.row === currentCell.row + 1 && c.col === currentCell.col);
            break;
        case 'left':
            nextCell = board.find((c) => c.row === currentCell.row && c.col === currentCell.col - 1);
            break;
        case 'right':
            nextCell = board.find((c) => c.row === currentCell.row && c.col === currentCell.col + 1);
            break;
        case 'up-left':
            nextCell = board.find((c) => c.row === currentCell.row - 1 && c.col === currentCell.col - 1);
            break;
        case 'up-right':
            nextCell = board.find((c) => c.row === currentCell.row - 1 && c.col === currentCell.col + 1);
            break;
        case 'down-left':
            nextCell = board.find((c) => c.row === currentCell.row + 1 && c.col === currentCell.col - 1);
            break;
        case 'down-right':
            nextCell = board.find((c) => c.row === currentCell.row + 1 && c.col === currentCell.col + 1);
            break;
        default:
            break;
    }
    return nextCell;
}

