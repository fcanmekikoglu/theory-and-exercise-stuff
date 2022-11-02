//  Binary Search - Divide & Conquer
//  O(log n)
let arr: number[] = [];
for (let i = 1; i < 1024; i++) {
  arr.push(i);
}

let start: number = 0;
let end: number = arr.length - 1;
let target = 176;

function binarySearch(
  arr: number[],
  start: number,
  end: number,
  target: number
): any {
  console.log(arr.slice(start, end));
  if (start > end) return false;
  let midIndex = Math.floor((start + end) / 2);
  if (arr[midIndex] === target) return true;

  if (arr[midIndex] > target)
    return binarySearch(arr, start, midIndex - 1, target);
  else return binarySearch(arr, midIndex + 1, end, target);
}

binarySearch(arr, start, end, target);
