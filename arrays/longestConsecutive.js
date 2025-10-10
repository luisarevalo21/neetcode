class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    // so steps would be store all teh values into a map.
    //then iterate the array again checking if the its num-1 doesnt exist if it does exist chain breaks otherwise continue by grabbing form my map until i can't no more.
    //after iterating through the list return my largest chain?

    const map = new Map();

    for (let num of nums) {
      if (!map.has(num)) {
        map.set(num, num);
      }
    }

    let largest = 0;
    for (let num of nums) {
      let cur = num;
      let curCounter = 0;
      if (!map.has(num - 1)) {
        while (map.has(cur)) {
          curCounter++;
          cur++;
        }
        largest = Math.max(largest, curCounter);
      }
    }
    return largest;
  }
}

const s = new Solution();
s.longestConsecutive([100, 4, 200, 1, 3, 2]);
