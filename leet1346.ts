// 1346. Check If N and Its Double Exist
// Given an array arr of integers,
// check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

function checkIfExist(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == 2 * arr[j] || arr[j] == 2 * arr[i]) {
        return true;
      }
    }
  }
  return false;
}

const testarr = [12, 4, 6];
console.log(checkIfExist(testarr));

export {};
