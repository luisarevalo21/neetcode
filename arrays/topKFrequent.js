class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = new Map();
    const buckets = new Array(nums.length + 1).fill(0);

    //iteraet through the nums
    //and store the value into the bucket increasing the count
    //return the result going backwards from the bucekts into new array

    //count the number of occurances in the map then store them in m array based on the count

    for (let i = 0; i < nums.length; i++) {
      if (!map.has(nums[i])) {
        map.set(nums[i], 1);
      } else {
        map.set(nums[i], map.get(nums[i]) + 1);
      }
    }

    //bucket is count => to value

    for (let [key, value] of map.entries()) {
      //it exists add new value to array
      if (buckets[value]) {
        const arr = buckets[value];
        arr.push(key);

        buckets[value] = arr;
      } else {
        buckets[value] = [key];
      }
    }

    const res = [];

    //go down the list from n -1;
    //set largest to 0
    //if i find a large number minus k?

    for (let i = buckets.length - 1; i >= 0; i--) {
      if (buckets[i] !== 0) {
        res.push(...buckets[i]);

        if (res.length === k) {
          return res;
        }
      }
    }
    return res;
  }
}
