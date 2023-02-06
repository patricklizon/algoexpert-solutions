/*

  Write a function that takes in an array of words and returns the smallest
  array of characters needed to form all of the words. The characters don't need
  to be in any particular order.


  For example, the characters ["y", "r", "o", "u"] are needed to
  form the words ["your", "you", "or", "yo"].


  Note: the input words won't contain any spaces; however, they might contain
  punctuation and/or special characters.

  Sample Input
    words = ["this", "that", "did", "deed", "them!", "a"]

  Sample Output
    ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]

*/

export function minimumCharactersForWords(words: string[]): string[] {
  const resultMap = new Map<string, number>();
  const wordMap = new Map<string, number>();

  for (const w of words) {
    for (const c of w) {
      wordMap.set(c, (wordMap.get(c) ?? 0) + 1);
      resultMap.set(c, Math.max(resultMap.get(c) ?? -1, wordMap.get(c) ?? -1));
    }
    wordMap.clear();
  }

  let result: string[] = [];
  for (const [char, count] of resultMap.entries()) {
    result = result.concat(Array.from<string>({ length: count }).fill(char));
  }

  return result;
}
