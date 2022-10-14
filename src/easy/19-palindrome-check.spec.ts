import { runTestCases, TestCases } from "../utils";

import { isPalindrome as fn } from "./19-palindrome-check";

test("checks if string is a palindrome", () => {
  const testCases: TestCases<typeof fn> = [
    [["abcba"], true],
    [["zk"], false],
    [[""], true],
    [["a"], true],
  ];

  runTestCases(fn, testCases);
});
