import { checkWin } from './checkWin';
import { cells } from './cells';

test('returns 0 for no win', () => {
  const board = cells;

  const cell =  {  
    col: 6,
    index: 41,
    row: 5,
    value: 1
  };

  const result = checkWin(board, cell);
  expect(result).toBe(0);
});

test('returns 1 for player 1 win (horizontal)', () => {
  // Visual representation of the board
  // [0, 0, 0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0, 0, 0]
  // [1, 1, 1, 1, 0, 0, 0]

  const board = cells;
  // set up cells for player 1 win
  for (let i = 37; i < 41; i++)
    board[i].value = 1;

  const cell = {
    col: 3,
    index: 38,
    row: 5,
    value: 1
  }

  // show cell value in console
  const result = checkWin(board, cell);
  expect(result).toStrictEqual([1, [{"col": 3, "index": 38, "row": 5, "value": 1}, 
                                    {"col": 2, "index": 37, "row": 5, "value": 1}, 
                                    {"col": 4, "index": 39, "row": 5, "value": 1}, 
                                    {"col": 5, "index": 40, "row": 5, "value": 1}]]);
});

test('returns 2 for player 2 win (vertical)', () => {
  // Visual representation of the board
  // [0, 0, 0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0, 0, 0]
  // [2, 0, 0, 0, 0, 0, 0]
  // [2, 0, 0, 0, 0, 0, 0]
  // [2, 0, 0, 0, 0, 0, 0]
  // [2, 0, 0, 0, 0, 0, 0]

  const board = cells;
  // set up cells for player 2 win like on the board above
  for (let i = 14 ; i < 42; i += 7)
    board[i].value = 2;

  const cell = {
    col: 0,
    index: 28,
    row: 4,
    value: 2
  }

  const result = checkWin(board, cell);
  expect(result).toStrictEqual([2, [{"col": 0, "index": 28, "row": 4, "value": 2}, 
                                    {"col": 0, "index": 21, "row": 3, "value": 2}, 
                                    {"col": 0, "index": 14, "row": 2, "value": 2}, 
                                    {"col": 0, "index": 35, "row": 5, "value": 2}]]);
});

test('returns 1 for player 1 win (diagonal)', () => {
  // Visual representation of the board
  // [0, 0, 0, 0, 0, 0, 0]
  // [0, 0, 0, 0, 0, 0, 0]
  // [1, 0, 0, 0, 0, 0, 0]
  // [0, 1, 0, 0, 0, 0, 0]
  // [0, 0, 1, 0, 0, 0, 0]
  // [0, 0, 0, 1, 0, 0, 0]

  const board = cells;
  // set up cells for player 2 win like on the board above
  for (let i = 14; i < 42; i += 8)
    board[i].value = 1;

  const cell = {
    col: 0,
    index: 14,
    row: 2,
    value: 1
  }

  const result = checkWin(board, cell);
  expect(result).toStrictEqual([1, [{"col": 0, "index": 14, "row": 2, "value": 1},
                                    {"col": 1, "index": 22, "row": 3, "value": 1},
                                    {"col": 2, "index": 30, "row": 4, "value": 1},
                                    {"col": 3, "index": 38, "row": 5, "value": 1}]]);
});

test('returns 3 for tie', () => {
  // Visual representation of the board
  // [1, 2, 1, 2, 1, 2, 1]
  // [2, 1, 2, 1, 2, 1, 2]
  // [2, 2, 1, 2, 1, 2, 1]
  // [1, 2, 1, 2, 1, 2, 1]
  // [2, 1, 2, 1, 2, 1, 2]
  // [2, 1, 2, 1, 2, 1, 2]
  
  const board = cells;
  // set up cells for tie
  for (let i = 0; i < 42; i++) {
    if (i % 3 === 0) {
      board[i].value = 1;
    } else {
      board[i].value = 2;
    }
  }

  const cell = {
    col: 6,
    index: 41,
    row: 5,
    value: 1
  }

  const result = checkWin(board, cell);
  // Result must be [3, []]
  expect(result).toStrictEqual([3, []]);
});