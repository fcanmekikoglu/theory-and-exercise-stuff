// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

function search(nums: number[], target: number): number {
  let high = nums.length - 1;
  let low = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const testarr = [3, 6, 1, 2, 22];
const testtarget = 2;
const testtarget2 = 4;

console.log(search(testarr, testtarget));
console.log(search(testarr, testtarget2));

export {};
