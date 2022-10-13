import { test } from "uvu";
import assert from "uvu/assert";

import { TestCases } from "../utils";

import { moveElementToEnd as fn } from "./03-move-element-to-end";

test("moves all instances of element to move at the end of the array", () => {
  const testCases: TestCases<typeof fn> = [
    [
      [[2, 1, 2, 2, 2, 3, 4, 2], 2],
      [4, 1, 3, 2, 2, 2, 2, 2],
    ],
    [
      [[3, 3, 3, 3, 3], 3],
      [3, 3, 3, 3, 3],
    ],
    [
      [[3, 1, 2, 4, 5], 3],
      [5, 1, 2, 4, 3],
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(fn(...args), expected, `failed test case at idx: ${idx}`);
  });
});

test.run();
