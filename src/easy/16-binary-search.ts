/*


  Write a function that takes in a sorted array of integers as well as a target
  integer. The function should use the Binary Search algorithm to determine if
  the target integer is contained in the array and should return its index if it
  is, otherwise -1.


  The Binary Search algorithm works by finding the number in the middle of the input array
  and comparing it to the target number. Given that the array is sorted,
  if this middle number is smaller than the target number,
  then the entire left part of the array is no longer worth exploring since
  the target number can no longer be in it;
  similarly, if the middle number is greater than the target number,
  then the entire right part of the array is no longer worth exploring.
  Applying this logic recursively eliminates half of the array until the number is found or until
  the array runs out of numbers.


  Sample Input
  array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
  target = 33

  Sample Output
  3


 */

export function binarySearch(array: readonly number[], target: number): number {
  return search(array, target, 0, array.length - 1);
}

function search(
  array: readonly number[],
  target: number,
  leftIdx: number,
  rightIdx: number
): number {
  const idx = Math.floor((leftIdx + rightIdx) / 2);
  const val = array.at(idx);

  if (leftIdx > rightIdx) return -1;
  if (val === undefined) return -1;
  if (val === target) return idx;
  if (val < target) return search(array, target, idx + 1, rightIdx);
  else return search(array, target, leftIdx, idx - 1);
}
