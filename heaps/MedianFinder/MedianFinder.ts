class MedianFinder {
  minHeap: MinHeap<number>;
  maxHeap: MaxHeap<number>;

  constructor() {
    this.minHeap = new MinHeap();
    this.maxHeap = new MaxHeap();
  }

  addNum(num: number): void {
    //add directly to the maxHeap

    //while they are imbalance either the sizes are different or the top of maxHeap>= this.minHeap
    //pop from the largest one or pop from the maxHeap

    this.maxHeap.push(num);

    while (Math.abs(this.maxHeap.size() - this.minHeap.size()) > 1 || this.maxHeap.top() > this.minHeap.top()) {
      //imbalane in size pop fromthe lager one
      if (Math.abs(this.maxHeap.size() - this.minHeap.size()) > 1) {
        if (this.maxHeap.size() > this.minHeap.size()) {
          const cur = this.maxHeap.pop();
          this.minHeap.push(cur);
        } else {
          const cur = this.minHeap.pop();
          this.maxHeap.push(cur);
        }
      }
      //maxHeap top is larger than minHeap top
      else if (this.maxHeap.top() >= this.minHeap.top()) {
        const cur = this.maxHeap.pop();
        this.minHeap.push(cur);
      }
    }
  }

  findMedian(): number {
    let res = null;

    if (this.minHeap.size() > this.maxHeap.size()) {
      res = this.minHeap.top();
    } else if (this.minHeap.size() < this.maxHeap.size()) {
      res = this.maxHeap.top();
    } else {
      res = (this.minHeap.top() + this.maxHeap.top()) / 2;
    }

    return res;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
