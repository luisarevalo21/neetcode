function solveNQueens(n: number): string[][] {
  //intial thoughts
  //iterere through the entire board
  /* and attempt to place a queen if possible 
    then check if the palcement is valid (valid palcemnt is the row, column and digonal only has 1 queen)
        if the placmnet is possible recurse and add another until it is valid 
        if i've reache the end of the baord backtrack and remove the previous queen and attempt again 

        check the entire board if the placment is invalid try the next space and continute 
        bad case is i've reached the end and sitll need had queens if so i must backtrack removing the previous placmnent and move it to the next spot. 

        scuess is i reach the end of the baord and n =0 add the solution to my res
        return and backtrack back to get another solution 

base csae if all the queens are used up and the board is valid add it to my resposne and return back 
        for either iteration use a for loop adding a queen to the spot check if the its valid placment if so recurs and decrease the amount of queens i have 

        if not move the queen tothe next spot and remove it from the previous spot and try the next one 
        
    */

  //creating the empty board
  const board: string[][] = new Array(n);

  for (let i = 0; i < n; i++) {
    const arr = new Array();

    for (let j = 0; j < n; j++) {
      arr.push(".");
    }
    board[i] = arr;
  }

  const res = [];

  dfs(0, n);
  // console.log('res', res)
  return res;
  function dfs(i, n) {
    // console.log('n', n)
    if (n === 0) {
      // console.log("inside if", n)
      // console.log("board inside if", board)

      const copyArray = [];
      for (let i = 0; i < board.length; i++) {
        const arr = [];
        for (let j = 0; j < board.length; j++) {
          arr.push(board[i][j]);
        }
        copyArray.push(arr.join(""));
      }

      // console.log("copy array", copyArray)
      res.push(copyArray);
      // res.push(board[0])
      return;
    }

    //now iterate throw the first row and an attempt to add a queen and recurse
    for (let k = 0; k < board.length; k++) {
      board[i][k] = "Q";
      // console.log(checkValidBoard(board, [i, k]))
      // console.log("board", board);
      if (checkValidBoard(board, [i, k])) {
        dfs(i + 1, n - 1);
      }
      //not valid backtrack
      board[i][k] = ".";
    }
  }

  // board[0][0] = "Q"
  // board[n - 1][n - 1] = "Q"

  // console.log("board", board)

  // checkValidBoard(board, [1, 1])

  function checkValidBoard(board: string[][], queenPlacement): boolean {
    //valid board is a queen is on a single row column and diagonal

    const [row, col] = queenPlacement;

    //chek if row and col are in bounds
    if (row >= n || col >= n) {
      // console.log("inside if", row, col, n)
      return false;
    }
    //check the row
    const curRow = board[row];
    //filter condition passes it takes it and adds it to curRowCount
    const curRowCount = curRow.filter(cur => cur === "Q");
    // console.log("cur row count", curRowCount)
    if (curRowCount.length >= 2) {
      return false;
    }

    //check the column
    //conctruct the column array
    const colArray = board.map(row => row[col]);
    // console.log(colArray)
    const curColCount = colArray.filter(cur => cur === "Q");
    if (curColCount.length >= 2) {
      return false;
    }

    //check the diagonal at the queensPlacement

    const diagonalArray = [];

    //get the top left corners
    let i = row;
    let j = col;
    while (i >= 0 && j >= 0) {
      diagonalArray.push(board[i][j]);

      i--;
      j--;
    }
    //top left to bottom right
    i = row + 1;
    j = col + 1;
    while (i < n && j < n) {
      diagonalArray.push(board[i][j]);

      i++;
      j++;
    }

    //get from right to left
    i = row + 1;
    j = col - 1;
    while (i < n && j >= 0) {
      diagonalArray.push(board[i][j]);

      i++;
      j--;
    }
    //let left to tirght
    i = row - 1;
    j = col + 1;
    while (i >= 0 && j < n) {
      diagonalArray.push(board[i][j]);

      i--;
      j++;
    }

    // console.log('diagonal array', diagonalArray)

    const curDiagonalCount = diagonalArray.filter(cur => cur === "Q");
    if (curDiagonalCount.length >= 2) {
      return false;
    }

    return true;
  }
}
