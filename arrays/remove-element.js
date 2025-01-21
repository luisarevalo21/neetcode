/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //itearte through list
  //if k is
  //if i see a non val cahracter swap
  //otherwise continue

  let k = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      //partition of quick sort
      nums[k] = nums[j];
      k++;
    }
  }
  return k;
};
