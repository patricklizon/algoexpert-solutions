/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**


  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.


  If no three numbers sum up to the target sum, the function should return an
  empty array.

  Sample Inputs
  array = [12, 3, 1, 2, -6, 5, -8, 6]
  targetSum = 0

  Sample Output
  [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]


 */

export function threeNumberSum(
  array: readonly number[],
  targetSum: number
): number[][] {
  const xs = [...array].sort((a, b) => a - b);
  const result: number[][] = [];

  for (let idx = 0; idx < array.length - 1; idx++) {
    let lIdx = idx + 1,
      rIdx = xs.length - 1,
      sum;

    while (lIdx < rIdx) {
      sum = xs[idx]! + xs[lIdx]! + xs[rIdx]!;

      if (sum < targetSum) {
        lIdx += 1;
        continue;
      }

      if (sum > targetSum) {
        rIdx -= 1;
        continue;
      }

      result.push([xs[idx]!, xs[lIdx]!, xs[rIdx]!]);
      lIdx += 1;
      rIdx -= 1;
    }
  }

  return result;
}
