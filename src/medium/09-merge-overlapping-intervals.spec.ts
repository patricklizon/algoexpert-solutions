import { runTestCases, TestCases } from "../utils";

import { mergeOverlappingIntervals as fn } from "./09-merge-overlapping-intervals";

test("merges overlapping intervals", () => {
  const testCases: TestCases<typeof fn> = [
    [[[]], []],
    [
      [
        [
          [1, 2],
          [3, 5],
          [9, 10],
          [4, 7],
          [6, 8],
        ],
      ],
      [
        [1, 2],
        [3, 8],
        [9, 10],
      ],
    ],
    [
      [
        [
          [89, 90],
          [-10, 20],
          [-50, 0],
          [70, 90],
          [90, 91],
          [90, 95],
        ],
      ],
      [
        [-50, 20],
        [70, 95],
      ],
    ],
  ];

  runTestCases(fn, testCases);
});
