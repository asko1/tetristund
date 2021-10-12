const {
  createBoard,
} = require('tetrisjs');

test('checks if tetris game dimensions are valid with random integers up to 10', () => {
  const rows = Math.floor(Math.random() * 11);
  const cols = Math.floor(Math.random() * 11);
  const board = createBoard(rows, cols);
  expect(board.length).toBe(rows);
  expect(board[0].length).toBe(cols);
});
