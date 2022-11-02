// 1351. Count Negative Numbers in a Sorted Matrix
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

//O(n^2) solution
//XXXXXX its brute force: assumes every array have the same length as the first one XXXXX
function countNegatives(grid: number[][]): number | any {
  let negs = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] < 0) {
        negs++;
      }
    }
  }
  return negs;
}

const testarray = [
  [1, 2],
  [-3, 4],
  [2, -1],
  [3, -6],
  [6, -1],
];
console.log(countNegatives(testarray));
export {};
