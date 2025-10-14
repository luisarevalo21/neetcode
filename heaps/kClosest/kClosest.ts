// import { MinHeap } from "../../data-structures/heap/MinHeap";
function kClosest(points: number[][], k: number): number[][] {
  //create the minheap of object {euclideanRes, pt}
  //calculate the euclideanRes and push to the heap by the result

  const minHeap = new MinHeap<{ euclideanRes: number; point: [number, number] }>(val => val.euclideanRes);
  const res: number[][] = [];
  //pop from the heap based on the euclindeanRes k time

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];

    const euclideanRes = x * x + y * y;
    minHeap.push({ euclideanRes, point: [x, y] });
  }

  for (let i = 0; i < k; i++) {
    const cur = minHeap.pop();
    res.push(cur.point);
  }

  return res;
  //resturn the res
}
