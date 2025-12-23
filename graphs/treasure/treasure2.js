class Solution {
  /**
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    /**
     * use bfs to iterate the entire grid
     * if i find a space explore all of its neighrbors
     * add it to the queue then mark it as visited
     * add all of its neighbors up down left right
     * increment my counter marking i explroed it
     * while the q isn't empty pop the row col from the q and explore its neighbors
     * marking its neighbors as visited
     * if i find a zero update its grid[row][col] with the current counter
     * when i exahused all the neighbors update the current counter to the grid[row][col] with the smllae to the two
     *
     * contintue on all nodes
     *
     */

    const ROWS = grid.length;
    const COLS = grid[0].length;
    const set = new Set();
    let counter = 0;
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        //exlore the node
        if (grid[row][col] === 2147483647) {
          bfs(row, col);
          //   grid[row][col] = Math.min(grid[row][col], counter);
          counter = 0;
          set.clear();
        }
      }
    }

    console.log("grid", grid);
    return grid;

    function bfs(r, c) {
      const q = [];
      q.push([r, c]);

      //i incrment count once i'm done exploring all of the nodes for that iteration
      while (q.length > 0) {
        //skip it
        // if (grid[row][col] === -1) {
        //   continue;
        // }

        const size = q.length;
        for (let i = 0; i < size; i++) {
          console.log("q", q);
          const [row, col] = q.pop();
          //mark visited
          set.add(`${row},${col}`);

          if (grid[row][col] === 0) {
            grid[r][c] = Math.min(grid[r][c], counter);
          }

          //explore all values in the neighbors
          //check if its in bound and not in the set and not -1 as its a wall
          if (row + 1 < ROWS && !set.has(`${row + 1},${col}`) && grid[row + 1][col] !== -1) {
            q.push([row + 1, col]);
          }
          if (row - 1 >= 0 && !set.has(`${row - 1},${col}`) && grid[row - 1][col] !== -1) {
            q.push([row - 1, col]);
          }
          if (col + 1 < COLS && !set.has(`${row},${col + 1}`) && grid[row][col + 1] !== -1) {
            q.push([row, col + 1]);
          }
          if (col - 1 >= 0 && !set.has(`${row},${col - 1}`) && grid[row][col - 1] !== -1) {
            q.push([row, col - 1]);
          }
        }
        counter++;
      }
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
