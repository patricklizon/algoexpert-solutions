/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**


  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Selection Sort algorithm to sort the array.


  Sample Input
  array = [8, 5, 2, 9, 5, 6, 3]

  Sample Output
  [2, 3, 5, 5, 6, 8, 9]


 */

export function selectionSort(array: number[]): number[] {
  if (array.length < 2) return array;

  for (let i = 0; i < array.length; i++) {
    let smallest = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j]! < array[smallest]!) smallest = j;
    }

    [array[i], array[smallest]] = [array[smallest]!, array[i]!];
  }

  return array;
}
