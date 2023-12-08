import { reverse } from './reverse';
import { cells } from './cells';

test('reverses the values in a column with non-zero values', () => {
  const board = cells;
    board[35].value = 1;
    board[28].value = 1;
    board[21].value = 2;
    board[14].value = 1;

  const expectedBoard = cells;
    expectedBoard[35].value = 1;
    expectedBoard[28].value = 2;
    expectedBoard[21].value = 1;
    expectedBoard[14].value = 1;


  expect(reverse(board, 0)).toEqual(expectedBoard);
});

test('returns the same board when all cells in the column have value 0', () => {
  const board = [
    { col: 0, index: 0, value: 0 },
    { col: 0, index: 7, value: 0 },
    { col: 0, index: 14, value: 0 },
    { col: 0, index: 21, value: 0 },
    { col: 0, index: 28, value: 0 },
    { col: 0, index: 35, value: 0 }
  ];

  expect(reverse(board, 0)).toEqual(board);
});

test('returns the same board when the column is empty', () => {
  const board = [];

  expect(reverse(board, 0)).toEqual(board);
});