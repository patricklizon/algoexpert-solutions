/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/**


  Write a function that takes in a non-empty string and returns its run-length
  encoding.


  From Wikipedia, "run-length encoding is a form of lossless data compression in
  which runs of data are stored as a single data value and count, rather than as
  the original run." For this problem, a run of data is any sequence of
  consecutive, identical characters. So the run "AAA" would be
  run-length-encoded as "3A".


  To make things more complicated, however, the input string can contain all
  sorts of special characters, including numbers. And since encoded data must be
  decodable, this means that we can't naively run-length-encode long runs. For
  example, the run "AAAAAAAAAAAA" (12 As), can't
  naively be encoded as "12A", since this string can be decoded as
  either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs
  of 10 or more characters) should be encoded in a split fashion; the
  aforementioned run should be encoded as "9A3A".

  Sample Input
  string = "AAAAAAAAAAAAABBCCCCDD"

  Sample Output
  "9A4A2B4C2D"


 */

export function runLengthEncoding(s: string): string {
  let c = s[0]!;
  let cStr = s[0]!;
  let result = "";

  for (let sc = 1; sc <= s.length; sc++) {
    if (s[sc] !== c) {
      result += encodeChar(c, cStr.length);
      c = s[sc]!;
      cStr = s[sc]!;
      continue;
    }
    cStr += c;
  }

  return result;
}

function encodeChar(char: string, count: number): string {
  if (count < 10) return count + char;
  return 9 + char + encodeChar(char, count - 9);
}
