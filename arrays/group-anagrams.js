/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  const sortedStrs = strs.map(str => str.split("").sort().join(""));

  for (let i = 0; i < strs.length; i++) {
    if (!map.has(sortedStrs[i])) {
      map.set(sortedStrs[i], [strs[i]]);
    } else {
      const arr = map.get(sortedStrs[i]);
      arr.push(strs[i]);
      map.set(sortedStrs[i], arr);
    }
  }

  return [...map.values()];
};
