/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 */
//burte force!
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

//optimzied
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  //create the index array from 0 -26 subtract charactat z- a to place it in the array

  const array = [];
  for (let i = 0; i < strs.length; i++) {
    const newArray = new Array(26).fill(0);

    for (let j = 0; j < strs[i].length; j++) {
      const index = strs[i].charCodeAt(j) - "a".charCodeAt(0);
      newArray[index] = newArray[index] + 1;
    }

    array.push(newArray);
  }

  const map = {};

  for (let i = 0; i < strs.length; i++) {
    if (map[array[i]] !== undefined) {
      const res = map[array[i]];

      res.push(strs[i]);

      map[array[i]] = res;
    } else {
      map[array[i]] = [strs[i]];
    }
  }

  return Object.values(map);
};
