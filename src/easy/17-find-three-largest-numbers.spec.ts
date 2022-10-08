import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { findThreeLargestNumbers } from "./17-find-three-largest-numbers";

test("finds number using binary search algorithm", () => {
  const testCases: TestCases<typeof findThreeLargestNumbers> = [
    [[[10, 5, 9, 10, 12]], [10, 10, 12]],
    [[[141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]], [18, 141, 541]],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      findThreeLargestNumbers(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
