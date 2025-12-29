/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  //iterate on the grids borders top left right and bottom recursing and using dfs marking everything connected as a # as all of these are invalid since they reach the border which is invalid

  //once complete iterat through the baord finding 0's converting to X and finding # mark them back to 0
  //and complete the solution

  const ROWS: number = board.length;
  const COLS: number = board[0].length;
  const visitedSet: Set<string> = new Set<string>();

  //top and bottom portion
  //iterate through the cols row is static top and bottom 0, rows-1
  for (let col = 0; col < COLS; col++) {
    dfs(0, col);
    dfs(ROWS - 1, col);
  }
  // console.log("board", board, visitedSet)
  //left and right portion
  //iteate through the rows col is static left 0 right cols-1
  for (let row = 0; row < ROWS; row++) {
    dfs(row, 0);
    dfs(row, COLS - 1);
  }

  function dfs(row: number, col: number): void {
    //otu of bounds or visited
    if (row < 0 || col < 0 || row >= ROWS || col >= COLS || visitedSet.has(`${row},${col}`)) {
      return;
    }

    visitedSet.add(`${row},${col}`);

    // console.log('board', board[row][col])
    //explore neighbiors
    if (board[row][col] === "O") {
      board[row][col] = "#";
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
    }
  }

  //iterat through the board converting 0s to X and # to 0
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] === "O") {
        board[row][col] = "X";
      } else if (board[row][col] === "#") {
        board[row][col] = "O";
      }
    }
  }
}
