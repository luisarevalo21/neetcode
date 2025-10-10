class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    //store the counts of t in a map
    //iterate throuhg s using a dynamic window, where left will start at the beingign and right
    //will go up to size t if the window contains all the values up the minmaum size. otherwise increase right untill we ahve all the values in the window
    //if so up left to reduce the size and check if all the values exists and update the value

    if (t.length > s.length) {
      return "";
    }

    //does the current window have all the charactesr in the tArray?
    function helper(tArray, currentWindow) {
      for (const [key, value] of tArray) {
        console.log(key);
        if (currentWindow.has(key) && currentWindow.get(key) >= tArray.get(key)) {
          continue;
        } else {
          return false;
        }
        // if(currentWindow.get(key))
      }
      return true;
    }

    const tMap = new Map();

    for (let i = 0; i < t.length; i++) {
      tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }

    let minSize = s.length;

    let minString = "";
    let left = 0;
    let windowMap = new Map();
    let res = "";
    for (let right = 0; right < s.length; right++) {
      windowMap.set(s[right], (windowMap.get(s[right]) || 0) + 1);
      minString += s[right];
      //if
      console.log("min string", minString);
      //window valid contineuy to up left until no longer valid
      while (left < s.length && helper(tMap, windowMap)) {
        minSize = Math.min(minString.length, minSize);
        windowMap.set(s[left], windowMap.get(s[left]) - 1);
        left++;
        res = minString;
        console.log("left", left);
        minString = minString.substring(1);
        console.log("min string in while after split", minString);
      }
    }

    return res;
  }
}

const s = new Solution();
s.minWindow("ADOBECODEBANC", "ABC");
