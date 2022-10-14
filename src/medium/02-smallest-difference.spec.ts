import { runTestCases, TestCases } from "../utils";

import { smallestDifference as fn } from "./02-smallest-difference";

test("finds a pair of numbers, one from each array whose absolute difference is closest to ZERO", () => {
  const testCases: TestCases<typeof fn> = [
    [
      [
        [-1, 5, 10, 20, 28, 3],
        [26, 134, 135, 15, 17],
      ],
      [28, 26],
    ],
    [
      [
        [10, 1000],
        [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530],
      ],
      [1000, 1014],
    ],
  ];

  runTestCases(fn, testCases);
});
