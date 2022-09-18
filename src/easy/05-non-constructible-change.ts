/**


  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you cannot create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).


  For example, if you're given coins = [1, 2, 5], the minimum
  amount of change that you can't create is 4. If you're given no
  coins, the minimum amount of change that you can't create is 1.


  Sample Input
  coins = [5, 7, 1, 1, 2, 3, 22]

  Sample Output
  20


 *
 */

export function nonConstructibleChange(coins: readonly number[]): number {
  const sortedCoins = [...coins].sort((a, b) => a - b);
  let minChange = 0;

  for (const coin of sortedCoins) {
    if (coin > minChange + 1) break;
    minChange += coin;
  }

  return minChange + 1;
}
