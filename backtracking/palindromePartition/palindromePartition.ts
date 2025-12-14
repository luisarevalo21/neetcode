function partition(s: string): string[][] {
  //given a string partition it into palindromes
  //as i iteratet i chcek to see if the current slice is a plaindrome if so i recurse
  //updating the next starting point to be afterwards i+1
  //break if the i reaches the end of the string

  //if its not a palindrome i do nohting and move to the next letter including it and see if this new slice is a palindrome if so add it to my currentPartition and recurse on it

  //once i return pop from the parititon since i used it or return backed as its no longer valid

  const res: string[][] = [];
  const curPartition: string[] = [];

  let start: number = 0;

  helper(start, curPartition);
  function helper(start, curPartition) {
    if (start >= s.length) {
      res.push([...curPartition]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (isPalindrome(s.slice(start, i + 1))) {
        curPartition.push(s.slice(start, i + 1));
        helper(i + 1, curPartition);
        curPartition.pop();
      }
    }
    return;
  }
  return res;

  function isPalindrome(s) {
    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right) {
      if (s[left] !== s[right]) return false;

      left++;
      right--;
    }
    return true;
  }
}
