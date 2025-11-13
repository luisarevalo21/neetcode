function subsetsWithDup(nums: number[]): number[][] {
  //happy
  //base case if i is larger than the nums.length i've found a solution then add it to my res and return back

  //will need to recurse descion will be do i take the value ornot
  //if i take it i increment i and pass my current subset

  //if i don't take it
  //i remve it from my current and udpate i and recurse

  //sort it
  nums.sort();
  const res: number[][] = [];
  let i: number = 0;
  let currentArray: number[] = [];
  function helper(i, currentArray) {
    if (i === nums.length) {
      res.push([...currentArray]);
      return;
    }

    //i take it it

    currentArray.push(nums[i]);

    helper(i + 1, currentArray);

    //i don't tak eit
    currentArray.pop();

    //i need to skip the duplicates
    while (i < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
    helper(i + 1, currentArray);
    // return
  }

  helper(i, currentArray);

  return res;
}
