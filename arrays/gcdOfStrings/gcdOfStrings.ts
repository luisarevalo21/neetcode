function gcdOfStrings(str1: string, str2: string): string {
  if (str1.length > str2.length) {
    let temp = str1;
    str1 = str2;
    str2 = temp;
  }

  let currentSubstring: string = "";
  let resSubstring: string = "";
  let largest: number = 0;
  for (let i = 0; i < str1.length; i++) {
    currentSubstring += str1[i];
    //consider it
    if (str1.length % currentSubstring.length === 0 && str2.length % currentSubstring.length === 0) {
      let x = str1.length / currentSubstring.length;
      let potentialSubstring1 = currentSubstring.repeat(x);

      let y = str2.length / currentSubstring.length;
      let potentialSubstring2 = currentSubstring.repeat(y);

      if (potentialSubstring1 === str1 && str2 === potentialSubstring2) {
        resSubstring = currentSubstring;
        largest = currentSubstring.length;
      }
    }
    //don't care move on
  }
  return resSubstring;
}
