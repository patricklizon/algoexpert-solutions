import { runTestCases, TestCases } from "../utils";

import { binarySearch as fn } from "./16-binary-search";

test("finds number using binary search algorithm", () => {
  const testCases: TestCases<typeof fn> = [
    [[[0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33], 3],
    [[[0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 0], 0],
    [[[0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 1], 1],
    [[[0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73], 9],
    [[[21, 33, 45, 45, 61], 133], -1],
    [[[], 133], -1],
  ];

  runTestCases(fn, testCases);
});
