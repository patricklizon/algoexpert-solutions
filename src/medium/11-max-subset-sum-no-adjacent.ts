/*


  Write a function that takes in an array of positive integers and returns the
  maximum sum of non-adjacent elements in the array.

  If the input array is empty, the function should return 0.

  Sample Input
    array = [75, 105, 120, 75, 90, 135]

  Sample Output
    330 // 75 + 120 + 135


*/

import { isNil } from "../utils";

export function maxSubsetSumNoAdjacent(xs: number[]): number {
  const [f, s, ...rest] = xs;
  if (isNil(f)) return 0;
  if (isNil(s)) return f;

  let first = Math.max(f, s);
  let second = f;
  let current = 0;

  for (const r of rest) {
    current = Math.max(first, second + r);
    second = first;
    first = current;
  }

  return first;
}
