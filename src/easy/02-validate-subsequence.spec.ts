import { runTestCases, type TestCases } from "../utils";

import { isValidSubsequence as fn } from "./02-validate-subsequence";

test("returns true when the sequence is a subsequence of the array", () => {
  const testCases: TestCases<typeof fn> = [
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

  runTestCases(fn, testCases);
});

test("returns false when the sequence is not a subsequence of the array", () => {
  const testCases: TestCases<typeof fn> = [
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

  runTestCases(fn, testCases);
});
