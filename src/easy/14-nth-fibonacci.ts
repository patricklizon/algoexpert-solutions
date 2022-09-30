/*

  The Fibonacci sequence is defined as follows: the first number of the sequence
  is 0, the second number is 1, and the nth number is the sum of the (n - 1)th
  and (n - 2)th numbers. Write a function that takes in an integer
  n and returns the nth Fibonacci number.


  Important note: the Fibonacci sequence is often defined with its first two
  numbers as F0 = 0 and F1 = 1. For the purpose of
  this question, the first Fibonacci number is F0; therefore,
  getNthFib(1) is equal to F0, getNthFib(2)
  is equal to F1, etc..

  Sample Input #1
  n = 2

  Sample Output #1
  1 // 0, 1

  Sample Input #2
  n = 6

  Sample Output #2
  5 // 0, 1, 1, 2, 3, 5


 */

const cache: Record<number, number> = {
  0: 0,
  1: 0,
  2: 1,
};

export function getNthFib(n: number): number {
  // @ts-expect-error: it's a number
  if (n in cache) return cache[n];

  for (let i = 1; i <= n; i++) {
    // @ts-expect-error: those are numbers
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    cache[i] ??= cache[i - 1] + cache[i - 2];
  }

  // @ts-expect-error: it's a number
  return cache[n];
}
