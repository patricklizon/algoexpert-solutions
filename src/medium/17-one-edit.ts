/*

You're given two strings stringOne and stringTwo. Write a function that determines if these two strings can be made equal using only one edit.

There are 3 possible edits:

Replace: One character in one string is swapped for a different character.
Add: One character is added at any index in one string.
Remove: One character is removed at any index in one string.

Note that both strings will contain at least one character. If the strings are the same, your function should return true.

Sample Input
  stringOne = "hello"
  stringTwo = "hollo"

Sample Output
  true // A single replace at index 1 of either string can make the strings equal

*/

export function oneEdit(stringOne: string, stringTwo: string): boolean {
  const lOne = stringOne.length;
  const lTwo = stringTwo.length;

  if (Math.abs(lOne - lTwo) > 1) return false;

  for (let idx = 0; idx < Math.min(lOne, lTwo); idx++) {
    if (stringOne[idx] !== stringTwo[idx]) {
      if (lOne > lTwo) {
        return stringOne.slice(idx + 1) === stringTwo.slice(idx);
      } else if (lTwo > lOne) {
        return stringOne.slice(idx) === stringTwo.slice(idx + 1);
      } else {
        return stringOne.slice(idx + 1) === stringTwo.slice(idx + 1);
      }
    }
  }

  return true;
}
