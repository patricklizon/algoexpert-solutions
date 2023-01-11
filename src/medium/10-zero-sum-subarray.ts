/*


  You're given a list of integers nums. Write a function that
  returns a boolean representing whether there exists a zero-sum subarray of
  nums.

  A zero-sum subarray is any subarray where all of the values add up to zero.
  A subarray is any contiguous section of the array. For the purposes of this
  problem, a subarray can be as small as one element and as long as the
  original array.

  Sample Input
    nums = [-5, -5, 2, 3, -2]
  Sample Output
    True // The subarray [-5, 2, 3] has a sum of 0


*/

export function zeroSumSubarray(nums: number[]): boolean {
  const sumDict = new Set<number>();

  let sum = 0;
  for (const n of nums) {
    sum += n;
    if (sumDict.has(sum)) return true;
    else sumDict.add(sum);
  }

  return !sum && 0 < nums.length && nums.length < 3;
}
