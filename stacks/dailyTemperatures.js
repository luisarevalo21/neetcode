class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const stack = [];
    const result = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
      if (stack.length === 0) {
        stack.push({ tempVal: temperatures[i], index: i });
      }

      //stack has somethign
      //pop if the top of teh stack is less tahn the curent index
      //subtract the differences and place it into the result
      else {
        //check first if the stack is emtpy
        while (stack.length > 0 && stack[stack.length - 1].tempVal < temperatures[i]) {
          const res = stack.pop();

          //idnexing on the value returned
          //and store the value and index into the array
          result[res.index] = i - res.index;

          // console.log(result)
        }

        stack.push({ tempVal: temperatures[i], index: i });
      }
    }
    console.log(result);

    return result;
  }
}

const s = new Solution();
s.dailyTemperatures([30, 38, 30, 36, 35, 40, 28]);
