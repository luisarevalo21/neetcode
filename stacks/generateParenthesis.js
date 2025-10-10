// class Solution {
//   /**
//    * @param {number} n
//    * @return {string[]}
//    */
//   generateParenthesis(n) {
//     //iterate through the number of n
//     //keep track of how many openings we have and close
//     //if close is greater than open return false and backtrrack to the top as its invalid
//     //once the string reaches 2n in length we found a solution and return true and add it to our solution res
//     //continue till we find them all?

//     const res = [];
//     let str = "";
//     this.helper(res, n, str);
//     console.log("res", res);
//     return res;
//   }
//   helper(res, n, str, open = 0, close = 0) {
//     // str += '('

//     //add open if  close < open and open < n ;

//     if (close <= open && open < n) {
//       str += "(";
//       open++;
//       this.helper(res, n, str, open, close);
//     }
//     if (str.length === n * 2) {
//       res.push(str);
//       return true;
//     }

//     //add close if close <open

//     if (close < open) {
//       str += ")";
//       close++;
//       this.helper(res, n, str, open, close);
//     }
//     if (close > open) {
//       str.pop();
//       return false;
//     }
//     // this.helper(res, n, str, open, close);
//     // res.push(str);

//     // str += "(";
//     // open++;
//     // if (open < n) {
//     //   return this.helper(res, n, str, open, close);
//     // }
//     // str += ")";
//     // close++;
//     // if (this.helper(res, n, open, close)) {
//     //   return res;
//     // }

//     // str.pop();
//     // return false;
//   }
//   // if (helper(res, n, open++, close)) {

//   // }
// }

// const s = new Solution();
// s.generateParenthesis((n = 1));

class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const stack = [];
    const res = [];

    function backTrack(open, close) {
      if (open === close && close === n && open === n) {
        console.log(stack);
        res.push(stack.join(""));
        return;
      }

      if (open < n) {
        stack.push("(");
        open++;
        backTrack(open, close);
        stack.pop();
      }

      if (close < open) {
        stack.push(")");
        close++;
        backTrack(open, close);
        stack.pop();
      }
    }
    backTrack(0, 0);
    // console.log(res);
    return res;
  }
}

const s = new Solution();
s.generateParenthesis(3);
