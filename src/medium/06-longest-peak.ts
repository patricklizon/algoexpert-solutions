/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**


  Write a function that takes in an array of integers and returns the length of
  the longest peak in the array.


  A peak is defined as adjacent integers in the array that are strictly
  increasing until they reach a tip (the highest value in the peak), at which
  point they become strictly decreasing. At least three integers are required to
  form a peak.


  For example, the integers 1, 4, 10, 2 form a peak, but the
  integers 4, 0, 10 don't and neither do the integers
  1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't
  form a peak because there aren't any strictly decreasing integers after the
  3.

  Sample Input
  array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

  Sample Output
  6 // 0, 10, 6, 5, -1, -3


 */

export function longestPeak(xs: number[]): number {
  if (xs.length < 3) return 0;

  let prev,
    next,
    current,
    peakLength = 0,
    longest = 0;

  for (let idx = 1; idx < xs.length - 1; idx++) {
    prev = xs[idx - 1]!;
    next = xs[idx + 1]!;
    current = xs[idx]!;

    if (isPeak(prev, next, current)) {
      peakLength =
        1 + countSlopeLength(xs, idx, -1) + countSlopeLength(xs, idx, 1);

      if (longest < peakLength) longest = peakLength;
    }
  }

  return longest;
}

function isPeak(prev: number, next: number, current: number): boolean {
  return prev < current && current > next;
}

function countSlopeLength(
  xs: number[],
  idx: number,
  direction: -1 | 1,
  length = 0
): number {
  const nextIdx = idx + direction;
  const nextEl = xs[nextIdx];
  if (nextEl === undefined || xs[nextIdx]! >= xs[idx]!) return length;

  return countSlopeLength(xs, nextIdx, direction, length + 1);
}
