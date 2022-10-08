import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { firstNonRepeatingCharacter } from "./18-first-no-repeating-character";

test("returns index of first non repeating character", () => {
  const testCases: TestCases<typeof firstNonRepeatingCharacter> = [
    [["abcdcaf"], 1],
    [["faadabcbbebdf"], 6],
    [[""], -1],
    [["a"], 0],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      firstNonRepeatingCharacter(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
