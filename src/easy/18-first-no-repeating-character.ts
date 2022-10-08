/**


  Write a function that takes in a string of lowercase English-alphabet letters
  and returns the index of the string's first non-repeating character.


  The first non-repeating character is the first character in a string that
  occurs only once.


  If the input string doesn't have any non-repeating characters, your function
  should return -1.

  Sample Input
  string = "abcdcaf"

  Sample Output
  1 // The first non-repeating character is "b" and is found at index 1.


 */

export function firstNonRepeatingCharacter(s: string): number {
  if (s.length === 0) return -1;
  if (s.length === 1) return 0;

  for (let idx = 0; idx < s.length; idx++) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const c = s[idx]!;
    if (s.indexOf(c) === s.lastIndexOf(c)) return idx;
  }

  return -1;
}
