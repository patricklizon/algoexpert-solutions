import { runTestCases, TestCases } from "../utils";

import { findThreeLargestNumbers as fn } from "./17-find-three-largest-numbers";

test("finds three largest numbers", () => {
  const testCases: TestCases<typeof fn> = [
    [[[10, 5, 9, 10, 12]], [10, 10, 12]],
    [[[141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]], [18, 141, 541]],
  ];

  runTestCases(fn, testCases);
});
