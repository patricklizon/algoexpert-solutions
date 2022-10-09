/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**


  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Bubble Sort algorithm to sort the array.


  Sample Input
  array = [8, 5, 2, 9, 5, 6, 3]

  Sample Output
  [2, 3, 5, 5, 6, 8, 9]


 */

export function insertionSort(array: number[]): number[] {
  if (array.length < 2) return array;

  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j]! < array[j - 1]!) {
        [array[j], array[j - 1]] = [array[j - 1]!, array[j]!];
      }
    }
  }

  return array;
}
