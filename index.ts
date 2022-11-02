//  Binary Search - Divide & Conquer
//  O(log n)
let arr: number[] = [
  1, 3, 4, 9, 22, 55, 68, 90, 91, 92, 150, 175, 176, 350, 568, 687, 987,
];
let arr2: number[] = [];
for (let i = 1; i < 1024; i++) {
  arr2.push(i);
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

binarySearch(arr2, start, end, target);
