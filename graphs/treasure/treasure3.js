class Solution {
  /**
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    //iterate and find the indexs of the gates save them into my q indexs row col

    //iterat throug the q process the nodes and for every node processed in that iteration update
    //its value on the grid
    //if the value is -1 or in the set don't add it skip it

    const ROWS = grid.length;
    const COLS = grid[0].length;
    const q = [];
    const set = new Set();
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (grid[row][col] === 0) {
          q.push([row, col]);
          set.clear();
        }
      }
    }

    let counter = 0;
    for (let i = 0; i < q.length; i++) {
      const [r, c] = q[i];
      console.log("r", r, c);
      bfs(r, c);
      set.clear();
      counter = 0;
    }

    function bfs(r, c) {
      const queue = [];
      queue.push([r, c]);

      while (queue.length > 0) {
        const curSize = queue.length;

        for (let i = 0; i < curSize; i++) {
          console.log("queue", queue);
          console.log("cur seize", curSize);
          const [row, col] = queue.shift();

          set.add(`${row},${col}`);
          console.log("i", i, curSize);
          if (row + 1 < ROWS && !set.has(`${row + 1},${col}`) && grid[row + 1][col] !== -1 && grid[row + 1][col] !== -1) {
            queue.push([row + 1, col]);
          }

          if (row - 1 >= 0 && !set.has(`${row - 1},${col}`) && grid[row - 1][col] !== -1 && grid[row - 1][col] !== 0) {
            queue.push([row - 1, col]);
          }

          if (col + 1 < COLS && !set.has(`${row},${col + 1}`) && grid[row][col + 1] !== -1 && grid[row][col + 1] !== 0) {
            queue.push([row, col + 1]);
          }

          if (col - 1 >= 0 && !set.has(`${row},${col - 1}`) && grid[row][col - 1] !== -1 && grid[row][col - 1] !== 0) {
            queue.push([row, col - 1]);
          }
          if (counter > 0) grid[row][col] = Math.min(grid[row][col], counter);
        }
        console.log("out side for", queue);

        counter++;
      }
    }

    console.log("grid", grid);
    return grid;
  }
}

const s = new Solution();
s.islandsAndTreasure([
  [2147483647, -1, 0, 2147483647],
  [2147483647, 2147483647, 2147483647, -1],
  [2147483647, -1, 2147483647, -1],
  [0, -1, 2147483647, 2147483647],
]);
