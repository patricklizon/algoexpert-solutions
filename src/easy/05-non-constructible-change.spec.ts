import { test } from "uvu";
import assert from "uvu/assert";

import { type TestCases } from "../utils/types";

import { nonConstructibleChange } from "./05-non-constructible-change";

test("returns the smallest non constructible change", () => {
  const testCases: TestCases<typeof nonConstructibleChange> = [
    [[[]], 1],
    [[[1]], 2],
    [[[2]], 1],
    [[[1, 7]], 2],
    [[[1, 2, 5]], 4],
    [[[1, 1, 1, 1, 1]], 6],
    [[[1, 1, 2, 3, 5, 7, 22]], 20],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      nonConstructibleChange(...args),
      expected,
      `failed test case at idx: ${idx} for args:
     > [${args[0].join(", ")}]`
    );
  });
});

test.run();
