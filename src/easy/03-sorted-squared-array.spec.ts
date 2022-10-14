import { runTestCases, type TestCases } from "../utils";

import { sortedSquaredArray as fn } from "./03-sorted-squared-array";

test("returns sorted array of squared numbers", () => {
  const testCases: TestCases<typeof fn> = [
    [[[1, 2, 3, 4]], [1, 4, 9, 16]],
    [[[-1, -2, -3, -4]], [1, 4, 9, 16]],
    [[[0, 0, 0]], [0, 0, 0]],
    [[[]], []],
  ];

  runTestCases(fn, testCases);
});
