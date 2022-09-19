import { test } from "uvu";
import assert from "uvu/assert";

import { type TestCases } from "../utils";

import { isValidSubsequence } from "./02-validate-subsequence";

test("returns true when the sequence is a subsequence of the array", () => {
  const testCases: TestCases<typeof isValidSubsequence> = [
    [
      [
        [1, 2, 3, 4],
        [2, 4],
      ],
      true,
    ],
    [
      [
        [5, 1, 22, 25, 6, -1, 8, 10],
        [1, 6, -1, 10],
      ],
      true,
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      isValidSubsequence(...args),
      expected,
      `failed test case at idx: ${idx} for args:
     > [${args[0].join(", ")}]
     > [${args[1].join(", ")}]`
    );
  });
});

test("returns false when the sequence is not a subsequence of the array", () => {
  const testCases: TestCases<typeof isValidSubsequence> = [
    [
      [
        [5, 6, 22, 25, 1, -1, 8, 10],
        [1, 6, -1, 10],
      ],
      false,
    ],
    [
      [
        [1, 4, 2, 3],
        [2, 4],
      ],
      false,
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      isValidSubsequence(...args),
      expected,
      `failed test case at idx: ${idx} for args:
     > [${args[0].join(", ")}]
     > [${args[1].join(", ")}]`
    );
  });
});

test.run();
