/* eslint-disable @typescript-eslint/no-non-null-assertion */
/**


  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.


  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.


  You can assume that there will only be one pair of numbers with the smallest
  difference.

  Sample Input
  arrayOne = [-1, 5, 10, 20, 28, 3]
  arrayTwo = [26, 134, 135, 15, 17]

  Sample Output
  [28, 26]


 */

import { isNil } from "../utils";

export function smallestDifference(
  arrayOne: readonly number[],
  arrayTwo: readonly number[]
): [fromArrayOne: number, fromArrayTwo: number] {
  const ascending = (a: number, b: number): number => a - b;
  const arr1 = [...arrayOne].sort(ascending);
  const arr2 = [...arrayTwo].sort(ascending);

  return compute(arr1, arr2, 0, 0, Math.abs(arr1[0]! - arr2[0]!), [
    arr1[0]!,
    arr2[0]!,
  ]);
}

function compute(
  arr1: number[],
  arr2: number[],
  arr1Idx: number,
  arr2Idx: number,
  distance: number,
  pair: [number, number]
): [number, number] {
  if (isNil(arr1.at(arr1Idx)) || isNil(arr2.at(arr2Idx))) return pair;

  const n1 = arr1[arr1Idx]!;
  const n2 = arr2[arr2Idx]!;

  if (n1 - n2 === 0) return [n1, n2];

  const nextDistance = Math.abs(n1 - n2);
  if (nextDistance < distance) {
    distance = nextDistance < distance ? nextDistance : distance;
    pair = [n1, n2];
  }

  if (n1 < n2) return compute(arr1, arr2, arr1Idx + 1, arr2Idx, distance, pair);
  return compute(arr1, arr2, arr1Idx, arr2Idx + 1, distance, pair);
}
