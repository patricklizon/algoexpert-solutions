import { runTestCases, TestCases } from "../utils";

import { isMonotonic as fn } from "./04-monotonic-array";

test("checks if array is monotonic", () => {
  const testCases: TestCases<typeof fn> = [
    [[[-1, -5, -10, -1100, -1100, -1101, -1102, -9001]], true],
    [[[-1]], true],
    [[[]], true],
    [[[1, 2, 3, 3, 2, 1]], false],
    [[[-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -7, -9, -10, -11]], false],
  ];

  runTestCases(fn, testCases);
});
