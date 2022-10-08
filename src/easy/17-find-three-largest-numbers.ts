/* eslint-disable @typescript-eslint/no-non-null-assertion */
/*


  Write a function that takes in an array of at least three integers and,
  without sorting the input array, returns a sorted array of the three largest
  integers in the input array.


  The function should return duplicate integers if necessary; for example, it
  should return [10, 10, 12] for an input array of
  [10, 5, 9, 10, 12].

  Sample Input
  array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

  Sample Output
  [18, 141, 541]


 */

export function findThreeLargestNumbers(
  xs: readonly number[]
): [number, number, number] {
  const result: [number, number, number] = [0, 0, 0];

  for (const x of xs) {
    switch (true) {
      case x > result[2]: {
        result[0] = result[1];
        result[1] = result[2];
        result[2] = x;
        break;
      }
      case x > result[1]: {
        result[0] = result[1];
        result[1] = x;
        break;
      }
      case x > result[0]: {
        result[0] = x;
        break;
      }
    }
  }

  return result;
}
