import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { productSum } from "./15-product-sum";

test("calculates product sum of passed numbers", () => {
  const testCases: TestCases<typeof productSum> = [
    [[[5, 2, [7, -1], 3, [6, [-13, 8], 4]]], 12],
    [[[1, 2, 3, 4, 5]], 15],
    [[[1, 2, [3], 4, 5]], 18],
    [[[[1, 2], 3, [4, 5]]], 27],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      productSum(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
