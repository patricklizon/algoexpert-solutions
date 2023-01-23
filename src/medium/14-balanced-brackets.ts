/*


  Write a function that takes in a string made up of brackets ((,
  [, {, ), ], and
  }) and other optional characters. The function should return a
  boolean representing whether the string is balanced with regards to brackets.


  A string is said to be balanced if it has as many opening brackets of a
  certain type as it has closing brackets of that type and if no bracket is
  unmatched. Note that an opening bracket can't match a corresponding closing
  bracket that comes before it, and similarly, a closing bracket can't match a
  corresponding opening bracket that comes after it. Also, brackets can't
  overlap each other as in
  [(]).

Sample Input
string = "([])(){}(())()()"

Sample Output
true // it's balanced



*/

// crate bracket dictionary { = }, [ = ], ( = );
// crate stack
// iterate through all characters of string;
// if (char in dict) push char on stack
// else pop element from stack and check if it creates the pair
// when pair is not matched, return false
// otherwise continue
// check if there are any elements left in the stack, if so return false
// otherwise true

import { isNil } from "../utils";

export function balancedBrackets(s: string): boolean {
  const stack: string[] = [];
  const dict: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let popped: string | undefined;
  for (const c of s) {
    if (c in dict) stack.push(c);
    else {
      if (isIgnoredChar(c)) continue;

      popped = stack.pop();
      if (isNil(popped)) return false;
      if (dict[popped] !== c) return false;
    }
  }

  return !stack.length;

  function isIgnoredChar(c: string): boolean {
    return !Object.entries(dict).flat().includes(c);
  }
}
