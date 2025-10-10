/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[0];

  while (left <= right) {
    console.log(left, right, res);
    if (nums[left] <= nums[right]) {
      res = Math.min(nums[left], res);
    }
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    res = Math.min(nums[mid], res);
  }
  return res;
};

findMin([3, 4, 5, 1, 2]);
