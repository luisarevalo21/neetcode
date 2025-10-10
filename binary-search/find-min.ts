function search(nums: number[], target: number): number {
  //check if i'm in the left section by comaparing against my target

  //if the middle is <= to the left i'm in the left section
  //i check if i go left or right depedning on the left value
  //if the target is less than left i go  left from middle

  //else if the the target is greater or eequal to left search left  from middle

  //if the i'm in the right i check

  let left: number = 0;

  let right: number = nums.length - 1;

  while (left <= right) {
    let middle: number = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    console.log("middle", nums[middle], nums[left]);
    if (nums[left] <= nums[middle]) {
      //target is greater than the middle
      if (target < nums[middle]) {
        if (target >= nums[left]) {
          console.log("isnide if");

          right = middle - 1;
        } else {
          console.log("isnide else");
          left = middle + 1;
        }
      } else {
        if (target > nums[right]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
    } else {
      if (nums[left] > target) {
        left = middle + 1;
      } else if (nums[right] > target) {
        right = middle - 1;
      }
    }

    //i'm in the right portion
    // else {

    //     // check if the middle is greater than target ?
    //     if (target <= nums[middle] && target < nums[right]) {
    //         right = middle - 1

    //     }
    //     else {
    //         left = middle + 1
    //     }

    // }
  }
  return -1;
}

console.log(search([5, 1, 3], 3));
