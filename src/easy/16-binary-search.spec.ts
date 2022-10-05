import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { binarySearch } from "./16-binary-search";

test("finds number using binary search algorithm", () => {
  const testCases: TestCases<typeof binarySearch> = [
    [[[0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33], 3],
    [[[0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 0], 0],
    [[[0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 1], 1],
    [[[0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 73], 9],
    [[[21, 33, 45, 45, 61], 133], -1],
    [[[], 133], -1],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      binarySearch(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
