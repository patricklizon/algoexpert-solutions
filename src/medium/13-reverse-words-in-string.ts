/*



  Write a function that takes in a string of words separated by one or more
  whitespaces and returns a string that has these words in reverse order. For
  example, given the string "tim is great", your function should
  return "great is tim".


  For this problem, a word can contain special characters, punctuation, and
  numbers. The words in the string will be separated by one or more whitespaces,
  and the reversed string must contain the same whitespaces as the original
  string. For example, given the string
  "whitespaces    4" you would be expected to return
  "4    whitespaces".


  Note that you're not allowed to to use any built-in
  split or reverse methods/functions. However, you
  are allowed to use a built-in join method/function.

Also note that the input string isn't guaranteed to always contain words.

Sample Input
  string = "AlgoExpert is the best!"

Sample Output
  "best! the is AlgoExpert"


 */

export function reverseWordsInString(string: string): string {
  let result = "";
  let word = "";
  let char = "";
  for (let idx = string.length - 1; idx >= -1; idx--) {
    if (idx === -1) {
      result += word;
      continue;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    char = string[idx]!;
    if (char !== " ") word = char + word;
    else {
      result += word + " ";
      word = "";
    }
  }

  return result;
}
