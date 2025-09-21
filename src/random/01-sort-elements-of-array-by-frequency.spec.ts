import { test } from "vitest";

import { runTestCases, TestCases } from "../utils";

import { solution as fn } from "./01-sort-elements-of-array-by-frequency";

test("sort the array ascending by frequency", () => {
  const testCases: TestCases<typeof fn> = [
    [[[4, 1, 2, 3, 2, 3, 1, 2]], [2, 2, 2, 1, 1, 3, 3, 4].join(" ")],
    [[[4, 5, 6, 5, 4, 3]], [4, 4, 5, 5, 3, 6].join(" ")],
    [[[4, 5, 10, 5, 10, 3]], [5, 5, 10, 10, 3, 4].join(" ")],
  ];

  runTestCases(fn, testCases);
});
