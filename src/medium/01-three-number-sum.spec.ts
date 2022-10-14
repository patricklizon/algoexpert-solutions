import { runTestCases, TestCases } from "../utils";

import { threeNumberSum as fn } from "./01-three-number-sum";

test("returns a pair of numbers from input array when they sum to targetSum", () => {
  const testCases: TestCases<typeof fn> = [
    [
      [[12, 3, 1, 2, -6, 5, -8, 6], 0],
      [
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, 1, 5],
      ],
    ],
  ];

  runTestCases(fn, testCases);
});
