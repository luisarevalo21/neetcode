class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    //valid tree?
    //valid tree is a tree that doesn't have cycles and is connected
    //cannot have a node not connected to the tree
    //use dfs to search the nodes checking if the current is the parent and
    //in my viisted set if so return false
    //otherwise recurse on its children

    //removing from visited set and retunr true after exploring all the neighbors

    const map = new Map();

    for (let i = 0; i < n; i++) {
      map.set(i, []);
    }
    for (let i = 0; i < edges.length; i++) {
      const [node1, node2] = edges[i];
      map.set(node1, [...map.get(node1), node2]);
      map.set(node2, [...map.get(node2), node1]);
    }
    const visitedSet = new Set();

    function dfs(node, parent) {
      //base case if its in visited return false
      if (visitedSet.has(node)) {
        return false;
      }

      visitedSet.add(node);
      const neighbors = map.get(node);

      for (let i = 0; i < neighbors.length; i++) {
        //ignore the parent
        if (neighbors[i] === parent) {
          continue;
        }
        if (!dfs(neighbors[i], node)) {
          return false;
        }
      }
      // visitedSet.delete(node)
      return true;
    }

    return dfs(0, -1) && visitedSet.size === n;
  }
}
