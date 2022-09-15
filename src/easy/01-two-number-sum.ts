/**
 * Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
 * If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
 * If no two numbers sum up to the target sum, the function should return an empty array.
 *
 * Note that the target sum has to be obtained by summing two different integers in the array;
 * you can't add a single integer to itself in order to obtain the target sum.
 *
 * You can assume that there will be at most one pair of numbers summing up to the target sum.
 * Sample Input
 * array = [3, 5, -4, 8, 11, 1, -1, 6]
 * targetSum = 10
 *
 * Sample Output
 * [-1, 11] // the numbers could be in reverse order
 *
 */

export function twoNumberSum(
  input: readonly number[],
  targetSum: number
): [number, number] | [] {
  const sortedInput = [...input].sort((a, b) => a - b);
  if (input.length <= 1) return [];

  return tryPointerPositions(0, input.length - 1, sortedInput, targetSum);
}

function tryPointerPositions(
  lIdx: number,
  rIdx: number,
  arr: readonly number[],
  targetSum: number
): [number, number] | [] {
  if (lIdx === rIdx) return [];

  const lVal = arr[lIdx];
  const rVal = arr[rIdx];
  if (lVal === undefined || rVal === undefined) {
    throw new Error("never happen");
  }

  const sum = lVal + rVal;
  if (sum === targetSum) return [lVal, rVal];
  if (sum < targetSum)
    return tryPointerPositions(lIdx + 1, rIdx, arr, targetSum);
  return tryPointerPositions(lIdx, rIdx - 1, arr, targetSum);
}
