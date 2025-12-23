class Solution {
  /**
   * @param {number[][]} grid
   *
   * BRUTE FORCE SOLUTION
   */
  islandsAndTreasure(grid) {
    //iterate through the entire grid
    //for each step if its an empty space inf recurse and count the space till i find a
    //treasure chest
    //if its a wall return back can't do anything

    //once i return back update the square to the counter
    //if i don't find a chest don't udpate the grid

    //continute till the end of the baord

    //keep a set of visted indexs

    const set = new Set();
    //return the updated grid
    const ROWS = grid.length;
    const COLS = grid[0].length;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (grid[row][col] === 0) {
          continue;
        }
        const val = dfs(row, col);
        grid[row][col] = val;
      }
    }
    return grid;
    function dfs(row, col) {
      //base case hit a wall can't do anything reutrn 0
      //or hit out of bounds
      console.log("row", row, col);
      if (row >= ROWS || col >= COLS || row < 0 || col < 0 || grid[row][col] === -1 || set.has(`${row},${col}`)) {
        return 0;
      }
      if (grid[row][col] === 0) {
        return 1;
      }

      set.add(`${row},${col}`);
      let res = 0;

      //empty spot recurse on it
      if (grid[row][col] === 2147483647) {
        res += dfs(row + 1, col);
        res += dfs(row - 1, col);
        res += dfs(row, col + 1);
        res += dfs(row, col - 1);
      }
      return res;
    }
  }
}

const s = new Solution();
s.islandsAndTreasure([
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
]);
