function subsets(nums: number[]): number[][] {
  //create the subetes by using dfs
  //the base case is if the ndoe is null or
  //passing the the cursubset and the overall subset

  //
  //recurse on the helper funciton adding i+1 for the next iteration
  //picking yes i take it then pop form the current iteration and go to the right not picking the value

  //basecase is if the node dones't have a left
  // if i is eequalto thse size of nums add the subet to the overall and return back up

  const curSubset: number[] = [];
  const overallSubset: number[][] = [];
  let i: number = 0;

  helper(i, curSubset, overallSubset);
  return overallSubset;

  function helper(i, curSubset, overallSubset) {
    //base case once i reach the end of the array nums i'm done with this current subset
    if (i === nums.length) {
      overallSubset.push([...curSubset]);
      return;
    }

    //add the number
    curSubset.push(nums[i]);
    //recurse on taking this number

    helper(i + 1, curSubset, overallSubset);
    //pop and remove it as i'm going on the right sife of the path
    curSubset.pop();
    helper(i + 1, curSubset, overallSubset);

    //once done reutrn
    return;
  }
}
