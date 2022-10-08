import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { isPalindrome } from "./19-palindrome-check";

test("checks if string is a palindrome", () => {
  const testCases: TestCases<typeof isPalindrome> = [
    [["abcba"], true],
    [["zk"], false],
    [[""], true],
    [["a"], true],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      isPalindrome(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
