function findKthLargest(nums: number[], k: number): number {
  //sorting sort the array then take kth from the right

  // time
  // O(nlogn)
  // const numsSorted: number[] = nums.sort((a, b) => a - b)

  // console.log(numsSorted)

  // return numsSorted[numsSorted.length - k]

  // optimal
  //store the etnire array in a maxheap
  //top will be the larget but i want the kth largest. pop k times and return the top
  const maxHeap = new MaxHeap<number>();
  for (let i = 0; i < nums.length; i++) {
    maxHeap.push(nums[i]);
  }

  // console.log(maxHeap.toArray())

  while (k > 1) {
    maxHeap.pop();
    k--;
  }

  return maxHeap.root();
}
