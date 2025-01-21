/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 1;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }
  }

  return left;
};
