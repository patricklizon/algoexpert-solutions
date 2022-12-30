/*

  Write a function that takes in a non-empty array of arbitrary intervals,
  merges any overlapping intervals, and returns the new intervals in no
  particular order.


  Each interval interval is an array of two integers, with
  interval[0] as the start of the interval and
  interval[1] as the end of the interval.


  Note that back-to-back intervals aren't considered to be overlapping. For
  example, [1, 5] and [6, 7] aren't overlapping;
  however, [1, 6] and [6, 7] are indeed
  overlapping.


  Also note that the start of any particular interval will always be less than
  or equal to the end of that interval.

  Sample Input
  intervals = [[1, 2], [3, 6], [4, 7], [6, 8], [9, 10]]

  Sample Output
  [[1, 2], [3, 8], [9, 10]]
    Merge the intervals [3, 5], [4, 7], and [6, 8].
    The intervals could be ordered differently.

*/

import { isNil } from "../utils";

type Interval = [number, number];

export function mergeOverlappingIntervals(
  array: readonly Interval[]
): Interval[] {
  const sortedIs = [...array].sort(([i1s], [i2s]) => i1s - i2s);
  const [i, ...is] = sortedIs;

  return i ? merge([], is, i) : [];
}

function merge(
  acc: readonly Interval[],
  is: Interval[],
  i: Interval
): Interval[] {
  const [next] = is;
  if (isNil(i) || isNil(next)) return [...acc, i];

  const nextSlice = is.slice(1);

  if (i[1] >= next[0]) {
    const end = i[1] > next[1] ? i[1] : next[1];
    return merge(acc, nextSlice, [i[0], end]);
  }

  return merge([...acc, i], nextSlice, next);
}
