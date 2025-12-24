function orangesRotting(grid: number[][]): number {
  //process iterate through the board find te rotten and count the number of fruits
  //perofmr bfs on the q adding fresh oragnes
  //which is within bounds and is a fresh orange 1 and not in my set

  //continute till q is empty an return either fresh is 0 return time or -1 since its invalid

  const ROWS: number = grid.length;
  const COLS: number = grid[0].length;
  const q: number[][] = [];
  let time: number = 0;
  const set = new Set<string>();
  let freshFruit: number = 0;
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] === 2) {
        q.push([row, col]);
        set.add(`${row},${col}`);
      } else if (grid[row][col] === 1) {
        freshFruit++;
      }
    }
  }
  bfs();

  function addPair(r: number, c: number): void {
    //check if its in valid out bounds in set or its 0
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || set.has(`${r},${c}`) || grid[r][c] === 0) {
      return;
    }

    //valid its an oragne ad to set
    set.add(`${r},${c}`);
    q.push([r, c]);
    freshFruit--;
  }

  function bfs() {
    //need to check freshfruit otherwise i have something in the queue process it
    //and can't do anything so time gets increment again causing offset
    while (freshFruit > 0 && q.length > 0) {
      const qSize = q.length;

      for (let i = 0; i < qSize; i++) {
        const [row, col] = q.shift();

        addPair(row + 1, col);
        addPair(row - 1, col);
        addPair(row, col + 1);
        addPair(row, col - 1);
      }
      time++;
    }
  }

  return freshFruit === 0 ? time : -1;
}
