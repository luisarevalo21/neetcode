function combinationSum2(candidates: number[], target: number): number[][] {
  //base cases of if my total === to the target reutn the current iteration
  //othercasse is if the total is larger than target reutn and if my pointer is out of bounds return

  const res: number[][] = [];
  const curCandidates: number[] = [];
  candidates.sort();

  let i: number = 0;
  let total: number = 0;
  dfsHelper(i, curCandidates, total);
  function dfsHelper(i, curCandidates, total) {
    if (total === target) {
      res.push([...curCandidates]);
      return;
    }

    if (i > candidates.length || total > target) {
      return;
    }

    curCandidates.push(candidates[i]);
    total += candidates[i];

    dfsHelper(i + 1, curCandidates, total);

    curCandidates.pop();
    total -= candidates[i];

    //case of skipign the current i value as I no longer want to consider it

    while (i < candidates.length && candidates[i] === candidates[i + 1]) {
      i++;
    }
    dfsHelper(i + 1, curCandidates, total);
  }

  return res;

  // recurse

  //i take the value
  //adding the current i to my array
  //adding i+1 to the i

  //i don't take it so i need to skip all the current implmentations of i
  //momve i to one. before
  //as i recurse on i+1

  //
}
