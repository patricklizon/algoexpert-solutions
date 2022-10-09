/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**


  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Bubble Sort algorithm to sort the array.


  Sample Input
  array = [8, 5, 2, 9, 5, 6, 3]

  Sample Output
  [2, 3, 5, 5, 6, 8, 9]


 */

export function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i]! > array[j]!) {
        [array[j], array[i]] = [array[i]!, array[j]!];
      }
    }
  }

  return array;
}
