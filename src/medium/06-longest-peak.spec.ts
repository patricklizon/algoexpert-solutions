import { runTestCases, TestCases } from "../utils";

import { longestPeak as fn } from "./06-longest-peak";

test("finds the highest peak", () => {
  const testCases: TestCases<typeof fn> = [
    [[[]], 0],
    [[[1]], 0],
    [[[2, 7, 3]], 3],
    [[[1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]], 6],
    [[[1, 1, 3, 2, 1]], 4],
    [
      [
        [
          1, 1, 1, 2, 3, 10, 12, -3, -3, 2, 3, 45, 800, 99, 98, 0, -1, -1, 2, 3,
          4, 5, 0, -1, -1,
        ],
      ],
      9,
    ],
  ];

  runTestCases(fn, testCases);
});
