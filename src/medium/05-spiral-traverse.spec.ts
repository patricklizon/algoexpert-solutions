import { runTestCases, TestCases } from "../utils";

import { spiralTraverse as fn } from "./05-spiral-traverse";

test("travels the matrix in pattern, turning right from left top corner", () => {
  const testCases: TestCases<typeof fn> = [
    [[[[1]]], [1]],
    [
      [
        [
          [1, 2],
          [4, 3],
        ],
      ],
      [1, 2, 3, 4],
    ],
    [
      [
        [
          [1, 2, 3, 4],
          [12, 13, 14, 5],
          [11, 16, 15, 6],
          [10, 9, 8, 7],
        ],
      ],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    ],
    [
      [
        [
          [1, 2, 3, 4],
          [10, 11, 12, 5],
          [9, 8, 7, 6],
        ],
      ],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ],
  ];

  runTestCases(fn, testCases);
});
