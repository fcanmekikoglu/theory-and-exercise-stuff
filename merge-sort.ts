//  Merge Sort
//  O(n log n)
const mergesort: any = (arr: number[]) => {
  if (arr.length < 2) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  //First value of slice is excluded
  const leftHalf = arr.slice(0, middleIndex);
  const rightHalf = arr.slice(middleIndex, arr.length);

  return merge(mergesort(leftHalf), mergesort(rightHalf));
};

const merge: any = (leftHalf: number[], rightHalf: number[]) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      result.push(leftHalf[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(rightHalf[rightIndex]);
      rightIndex += 1;
    }
  }
  return result
    .concat(leftHalf.slice(leftIndex))
    .concat(rightHalf.slice(rightIndex));
};

const array: number[] = [
  3, 6, 93, 1, 34567, 4, 345, 5, 11, 3, 111341, 556785, 3, 114111,
];

console.log(mergesort(array));
