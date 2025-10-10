class TimeMap {
  private keyStore: Map<string, [string, number][]> = new Map();

  constructor() {
    this.keyStore = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (!this.keyStore.has(key)) {
      // const newArray = new Array();
      // newArray.push([value, timestamp])
      this.keyStore.set(key, [[value, timestamp]]);
    } else {
      const list: [string, number][] = this.keyStore.get(key) ?? [];

      list.push([value, timestamp]);
    }
  }

  get(key: string, timestamp: number): string {
    if (this.keyStore.has(key)) {
      const list: [string, number][] = this.keyStore.get(key) ?? [];

      //binary search on the keys finding the value that is <= the current timestamp
      let left = 0;
      let right = list.length - 1;
      let res: [string, number] | null = null;

      while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (list[middle][1] <= timestamp) {
          res = list[middle];
          left = middle + 1;
        } else if (list[middle][1] >= timestamp) {
          right = middle - 1;
        }
      }
      if (res) {
        return res[0];
      }
    }
    return "";
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
