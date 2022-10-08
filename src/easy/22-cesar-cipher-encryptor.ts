/**


  Given a non-empty string of lowercase letters and a non-negative integer
  representing a key, write a function that returns a new string obtained by
  shifting every letter in the input string by k positions in the alphabet,
  where k is the key.


  Note that letters should "wrap" around the alphabet; in other words, the
  letter z shifted by one returns the letter a.

  Sample Input
  string = "xyz"
  key = 2

  Sample Output
  "zab"


 */

/*
 * NOTES

  zCharCode = aCharCode + charCount - 1;
  charCount = zCharCode - aCharCode + 1;

  a, b, ..., z
  aChartCode, aChartCode + 1, ..., aCharCode + charCount - 1

  aCharCode <= charCode(letter) + key
  0 <= charCode(letter) + key - aCharCode <|--- positive number

  newCharCode = (charCode(letter) + key - aCharCode) % charCount
                ^--- "key" will cause moving charCode outside of maximum range, which is zCharCode,
                     therefore it needs to be 'wrapped around' so it could pick values starting from aCharCode.

*/

export function caesarCipherEncryptor(s: string, key: number): string {
  const aCharCode = "a".charCodeAt(0);
  const zCharCode = "z".charCodeAt(0);
  const charCount = zCharCode - aCharCode + 1;

  return s
    .split("")
    .map((c) => {
      const charCode = (c.charCodeAt(0) + key - aCharCode) % charCount;
      return String.fromCharCode(charCode + aCharCode);
    })
    .join("");
}
