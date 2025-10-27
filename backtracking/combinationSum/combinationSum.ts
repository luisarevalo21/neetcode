function combinationSum(candidates: number[], target: number): number[][] {
  //varaition on duplciates tree as i can take a duplicate but the catch is it must sum up the total
  //and if the current total is eequal to the target if so add it to the array
  //

  //base case is if the i reach the end reutnr an add it to the total sum array
  //iterate and apply dfs as i recurse adding it to the the array and add it to my total counter
  //
  //check if i take the number
  //and if i don't take the number recurs and increment i
  //if i don't decrement my current ounter and remove it from my curreunt array

  //return

  //base case is if i reaches the end of the array's length or the total sum is = to the target

  //can do 3 decision for each number
  //take it
  //don't take it
  //or take it again

  let i: number = 0;
  let currentTotal: number = 0;
  const result: number[][] = [];
  const curArray: number[] = [];
  helper(i, result, curArray, currentTotal);

  function helper(i, result, curArray, currentTotal) {
    if (currentTotal === target) {
      result.push([...curArray]);
      return;
    }

    if (i >= candidates.length || currentTotal > target) {
      return;
    }

    //will need a while loop to take it i times
    //if i can't recurse by removing it adding the next one i times
    //continute with the overall helper of i by incrementing it i+1
    currentTotal += candidates[i];
    curArray.push(candidates[i]);

    // console.log("current total", currentTotal)
    // console.log("current array", curArray)

    //take the current one again continues to take it
    helper(i, result, curArray, currentTotal);

    currentTotal -= candidates[i];
    curArray.pop();
    //continute to the next one
    helper(i + 1, result, curArray, currentTotal);

    //don't take the current one
    // currentTotal -= candidates[i]
    // curArray.pop()
    // helper(i + 1, result, curArray, currentTotal)

    return;
  }

  return result;
}
