/*

Write a function that takes in an array of strings and groups anagrams together.

Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, "cinema" and "iceman" are anagrams; similarly, "foo" and "ofo" are anagrams.

Your function should return a list of anagram groups in no particular order.

Sample Input
  words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

Sample Output
  [["yo", "oy"],  ["act", "tac", "cat"], ["flop", "olfp"], ["foo"]]


*/

export function groupAnagrams(words: readonly string[]): string[][] {
  const toSortedString = (w: string): string => w.split("").sort().join("");
  const copiedWords = words.map(toSortedString);
  const dict: { [word: string]: string[] } = {};

  let w: string | undefined;
  for (const [idx, word] of copiedWords.entries()) {
    w = words[idx];
    if (!w) continue;
    else (dict[word] ??= []).push(w);
  }

  return Object.values(dict);
}
