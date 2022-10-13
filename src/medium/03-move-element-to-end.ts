/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**


  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.


  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.

  Sample Input
  array = [2, 1, 2, 2, 2, 3, 4, 2]
  toMove = 2

  Sample Output
  [1, 3, 4, 2, 2, 2, 2, 2] // the numbers 1, 3, and 4 could be ordered differently


 */

export function moveElementToEnd(array: number[], toMove: number): number[] {
  let lIdx = 0;
  let rIdx = array.length - 1;

  while (lIdx < rIdx) {
    if (array[rIdx]! === toMove) {
      rIdx--;
      continue;
    }

    if (array[lIdx]! === toMove) {
      [array[lIdx], array[rIdx]] = [array[rIdx]!, array[lIdx]!];
    }

    lIdx++;
  }

  return array;
}
