class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    //create the initial window and find the maxium till the end
    //slice the portion of the array use math.max for the slice up the coutners

    // console.log(nums.length)
    let left = 0;
    const res = [];
    for (let i = k; i < nums.length; i++) {
      const window = nums.slice(left, i);

      res.push(Math.max(...window));

      left++;
    }
  }
}

const s = new Solution();
s.maxSlidingWindow((nums = [1, 2, 1, 0, 4, 2, 6]), (k = 3));
