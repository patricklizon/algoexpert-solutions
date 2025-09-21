/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
  Given an array of integers, having some duplicate elements, sort the array ascending by frequency.

  Sample Inputs
  array = [1, 2, 3, 2, 4, 3, 1, 2]

  Sample Output
  [2, 2, 2, 1, 1, 3, 3, 4]
 */

export function solution(array: number[]): string {
  const frequency = array.reduce<Record<number, number>>((o, it) => {
    if (it in o) o[it]! += 1;
    else o[it] = 1;
    return o;
  }, {});

  return array
    .slice()
    .sort((a, b) => frequency[b]! - frequency[a]! || a - b)
    .join(" ");
}
