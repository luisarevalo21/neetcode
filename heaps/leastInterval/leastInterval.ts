function leastInterval(tasks: string[], n: number): number {
  const map = new Map();
  const maxHeap = new MaxPriorityQueue<number>();

  for (let i = 0; i < tasks.length; i++) {
    map.set(tasks[i], (map.get(tasks[i]) || 0) + 1);
  }

  for (let [key, value] of map) {
    maxHeap.push(value);
  }

  const queue = [];
  let time = 0;

  while (maxHeap.size() > 0 || queue.length > 0) {
    time++;
    if (maxHeap.size() > 0) {
      let cur = maxHeap.pop();
      cur--;
      if (cur > 0) {
        queue.push([cur, time + n]);
      }
    }

    if (queue.length > 0 && queue[0][1] === time) {
      const popped = queue.shift();
      maxHeap.push(popped[0]);
    }
  }

  return time;
}
