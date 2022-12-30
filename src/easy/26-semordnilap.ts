/*

  Write a function that takes in a list of unique strings and returns a list of
  semordnilap pairs.


  A semordnilap pair is defined as a set of different strings where the reverse
  of one word is the same as the forward version of the other. For example the
  words "diaper" and "repaid" are a semordnilap pair, as are the words
  "palindromes" and "semordnilap".


  The order of the returned pairs and the order of the strings within each pair
  does not matter.

  Sample Input
  words = ["diaper", "abc", "test", "cba", "repaid"]

  Sample Output
  [["diaper", "repaid"], ["abc", "cba"]]

*/

export function semordnilap(words: readonly string[]): [string, string][] {
  const ws = new Set(words);
  const result: [string, string][] = [];

  for (const w of ws) {
    const wRev = w.split("").reverse().join("");
    if (w === wRev) continue;
    if (!ws.has(wRev)) continue;

    result.push([w, wRev]);
    ws.delete(wRev);
  }

  return result;
}
