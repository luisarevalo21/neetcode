function numIslands(grid: string[][]): number {
  //need to track where I have visited
  //keep a set of visited indexes for quick loop up and check if its in there if not add it
  //

  //use the double for loop to iterate the entire board

  //when i find a 1 recurse left, right up and down checking for an island
  //if its not return
  //basecase is i've exhaused all the search for that index and increas the numIslands

  //return numIslands

  //solurion works by itereating through the board
  //checking if the value at the current index is not a 0 and if its no in the set
  //if if so recurse and epxlore it
  //recursiong check if its out of bounds is in the set and the valeu is a 0 if so this is invalid so i return

  //otehrwise i check if its a 1 if so i dfs and explore its islands and add it to my set

  //once i exhaused all of the possibilities i return back and increment the count of numsIslands

  //another way to solve it is at each one update the value to a 0 then check if the current row/col
  //isnt a 0 then i can recurse this groups them when i return back from dfs.

  //time
  // O(n4^n *m * n *m)

  //space O(n*m)
  let numIslands: number = 0;

  const set = new Set();
  //iterat theourh board

  const ROWS: number = grid.length;
  const COLS: number = grid[0].length;
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (grid[row][col] !== "0" && !set.has(`${row},${col}`)) {
        dfs(row, col);
        numIslands++;
      }
    }
  }

  return numIslands;

  function dfs(row, col): void {
    //i increment numIslands once i exhaused all of the dfs and can no longer explore that point anymore

    //out of bounds or no longer an island
    if (row >= ROWS || col >= COLS || row < 0 || col < 0 || grid[row][col] === "0" || set.has(`${row},${col}`)) {
      return;
    }
    // set.add(`${row},${col}`)

    //foudn a portion of an island recurse and explore it
    if (grid[row][col] === "1") {
      set.add(`${row},${col}`);
      // grid[row][col] = "0"
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col - 1);
    }

    return;
  }
}
