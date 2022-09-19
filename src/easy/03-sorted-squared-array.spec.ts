import { test } from "uvu";
import assert from "uvu/assert";

import { type TestCases } from "../utils";

import { sortedSquaredArray } from "./03-sorted-squared-array";

test("returns sorted array of squared numbers", () => {
  const testCases: TestCases<typeof sortedSquaredArray> = [
    [[[1, 2, 3, 4]], [1, 4, 9, 16]],
    [[[-1, -2, -3, -4]], [1, 4, 9, 16]],
    [[[0, 0, 0]], [0, 0, 0]],
    [[[]], []],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      sortedSquaredArray(...args),
      expected,
      `failed test case at idx: ${idx} for args:
     > [${args[0].join(", ")}]`
    );
  });
});

test.run();
