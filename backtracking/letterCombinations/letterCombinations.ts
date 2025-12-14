function letterCombinations(digits: string): string[] {
  //for each digit get the eltters that map to it will be a map for quick access
  //combinations
  //use all the combainations for each digit and recurse

  //base case is reach the end of the digists return and add it to my res
  //otehrwise return pop that current letter and try the next one till i'm done

  const letterToDigit = new Map<string, string>([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);

  //need currentPermuation

  const result: string[] = [];
  const currentPermuation: string[] = [];

  //for the string get the digits that match to it as this will be my possiblity to take from

  //will be an array of all strings i can choose from
  const possiblilities = [];
  for (let i = 0; i < digits.length; i++) {
    possiblilities[i] = letterToDigit.get(digits[i]);
  }

  helper(0, currentPermuation);
  return result;

  function helper(i: number, currentPermuation: string[]) {
    //base
    if (i >= digits.length) {
      result.push(currentPermuation.join(""));
      return;
    }

    //iterate through all of the valeus for the possonilities at the current index and recurse. onti for the next value

    //problem is j gets increment at the the next iterationa nd goes into the next one
    //which i don't want it to.

    // for (let j = i; j < digits.length; j++) {

    const curStrings = possiblilities[i];
    for (let k = 0; k < curStrings.length; k++) {
      currentPermuation.push(curStrings[k]);
      helper(i + 1, currentPermuation);
      currentPermuation.pop();
    }

    return;
  }
}
