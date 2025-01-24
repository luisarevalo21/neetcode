class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const buckets = new Array(nums.length + 1).fill(0);

    //map will count the occurances
    //then i store them in my buckets as an array
    //then iterate backwards from the bucekts till i have k elements
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }

    for (const [key, value] of map.entries()) {
      if (buckets[value] === 0) {
        buckets[value] = [key];
      } else {
        const arr = buckets[value];
        arr.push(key);

        buckets[value] = arr;
      }
    }
    console.log(buckets);

    const res = [];

    for (let i = buckets.length - 1; i >= 0; i--) {
      if (buckets[i] === 0) {
        continue;
      } else if (buckets[i] !== 0) {
        res.push(...buckets[i]);
        if (res.length === k) {
          return res;
        }
      }
    }
  }
}

const solution = new Solution();
solution.topKFrequent([7, 7], 1);
