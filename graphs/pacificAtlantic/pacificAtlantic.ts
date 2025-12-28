function pacificAtlantic(heights: number[][]): number[][] {
  /**
    use dfs at the top for pacific and the left checking each by runnig dfs 
    passing the associated set and the current height 
    then again for the the right side and bottom for the atlantic set 

    dfs on the row, col set and previousHeight 
    i return if i'm out of bounds or the current is in the set or the new one is smaller than the current
    as i want it to be bigger so i an recurse so i reutnr 

    otherwise i dfs on each 4 directions 

    
    
     */

  const ROWS = heights.length;
  const COLS = heights[0].length;
  const pacificSet = new Set<string>();
  const atlanticSet = new Set<string>();

  //check the top row and bottom col moves
  //row is constant

  for (let col = 0; col < COLS; col++) {
    dfs(0, col, pacificSet, heights[0][col]);
    dfs(ROWS - 1, col, atlanticSet, heights[ROWS - 1][col]);
  }

  //check the left column and the right column
  //the col is constant
  for (let row = 0; row < ROWS; row++) {
    dfs(row, 0, pacificSet, heights[row][0]);

    dfs(row, COLS - 1, atlanticSet, heights[row][COLS - 1]);
  }

  function dfs(row: number, col: number, set: Set<string>, previousHeight: number): void {
    //out of bounds
    if (row < 0 || col < 0 || row >= ROWS || col >= COLS || set.has(`${row},${col}`) || previousHeight > heights[row][col]) {
      return;
    }

    set.add(`${row},${col}`);
    dfs(row + 1, col, set, heights[row][col]);
    dfs(row - 1, col, set, heights[row][col]);
    dfs(row, col + 1, set, heights[row][col]);
    dfs(row, col - 1, set, heights[row][col]);

    return;
  }

  //check the matching pairs
  const res: number[][] = [];

  // console.log('pacific set', pacificSet, atlanticSet)
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (pacificSet.has(`${row},${col}`) && atlanticSet.has(`${row},${col}`)) {
        res.push([row, col]);
      }
    }
  }

  return res;
}
