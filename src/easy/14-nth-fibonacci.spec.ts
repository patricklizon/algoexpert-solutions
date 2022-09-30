import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { getNthFib } from "./14-nth-fibonacci";

test("calculates nth fibonacci number", () => {
  const testCases: TestCases<typeof getNthFib> = [
    [[1], 0],
    [[2], 1],
    [[6], 5],
    [[18], 1597],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      getNthFib(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
