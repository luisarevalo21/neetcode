function exist(board: string[][], word: string): boolean {
  /**
   * strategy
   * basecase if the word[i] =is equal the current value return true
   *
   * bad case is if row, col go out of bounds either negative or out of bounds of the araray
   *
   * return false backtrack back
   *
   *
   * add the current vlaue to my map
   * and check if the current i in the word is wqual to the word[row][col]
   * if so
   * recurse dfs visit all 4 sides of the square
   * checking map if its no it in it and out bounds
   * recurse
   *
   * if didn't match remove it from map
   * return false didn't match
   *
   *  */

  let row: number = 0;
  let col: number = 0;
  const map = new Map();
  let i: number = 0; //current index in the word
  const wordLength: number = word.length;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  function dfs(row, col, i) {
    //happy base case
    if (i === wordLength) {
      return true;
    }

    //out bounds bad case
    if (
      row >= board.length ||
      col >= board[0].length ||
      row < 0 ||
      col < 0 ||
      board[row][col] !== word[i] ||
      map.has(`${row}, ${col}`)
    ) {
      return false;
    }

    map.set(`${row}, ${col}`, 1);
    // console.log('map', map)

    let res =
      dfs(row, col + 1, i + 1) || dfs(row, col - 1, i + 1) || dfs(row + 1, col, i + 1) || dfs(row - 1, col, i + 1);

    //remove from map
    map.delete(`${row}, ${col}`);
    return res;
  }

  return false;
}
