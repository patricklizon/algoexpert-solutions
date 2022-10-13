/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**


Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.

An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.

Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.

Note that empty arrays and arrays of one element are monotonic.

Sample Input
array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

Sample Output
true

 */

export function isMonotonic(xs: number[]): boolean {
  if (xs.length < 2) return true;

  let direction: 0 | 1 | -1 = 0;

  for (let idx = 1; idx < xs.length; idx++) {
    const current = xs[idx]!;
    const previous = xs[idx - 1]!;

    if (current < previous) {
      switch (direction) {
        case 1: {
          return false;
        }
        case 0: {
          direction = -1;
        }
      }
      continue;
    }

    if (current > previous) {
      switch (direction) {
        case -1: {
          return false;
        }
        case 0: {
          direction = 1;
        }
      }
    }
  }

  return true;
}
