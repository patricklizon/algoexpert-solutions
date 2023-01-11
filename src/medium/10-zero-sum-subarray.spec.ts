import { runTestCases, TestCases } from "../utils";

import { zeroSumSubarray as fn } from "./10-zero-sum-subarray";

test("returns true when the subarray exists", () => {
  const testCases: TestCases<typeof fn> = [
    [[[0]], true],
    [[[2, -2]], true],
    [[[4, 2, -1, -1, 3]], true],
    [[[-5, -5, 2, 3, -2]], true],
  ];

  runTestCases(fn, testCases);
});

test("returns false when the subarray does not exists", () => {
  const testCases: TestCases<typeof fn> = [
    [[[]], false],
    [[[1, 2, 3]], false],
  ];

  runTestCases(fn, testCases);
});
