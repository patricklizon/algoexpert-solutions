import { test } from "uvu";
import assert from "uvu/assert";

import { TestCases } from "../utils";

import { twoNumberSum } from "./01-two-number-sum";

test("returns a pair of numbers from input array when they sum to targetSum", () => {
  const testCases: TestCases<typeof twoNumberSum> = [
    [
      [[3, 5, -4, 8, 11, 1, -1, 6], 10],
      [-1, 11],
    ],
    [
      [[3, 5, -4, 8, 14, 1, 6], 10],
      [-4, 14],
    ],
    [
      [[4, 6, 1], 5],
      [1, 4],
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      twoNumberSum(...args),
      expected,
      `failed test case at idx: ${idx} for args:
     > [${args[0].join(", ")}]
     > ${args[1]}`
    );
  });
});

test("returns an empty array when not a single pair sums to targetSum", () => {
  const testCases: TestCases<typeof twoNumberSum> = [
    [[[-1, 9], 999], []],
    [[[1, 2, 3, 4, 5, 6, 7], 999], []],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      twoNumberSum(...args),
      expected,
      `failed test case at idx: ${idx} for args:
     > [${args[0].join(", ")}]
     > ${args[1]}`
    );
  });
});

test("returns an empty array when there are no enough numbers", () => {
  const testCases: TestCases<typeof twoNumberSum> = [
    [[[-1], 0], []],
    [[[], 999], []],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      twoNumberSum(...args),
      expected,
      `failed test case at idx: ${idx} for args:
     > [${args[0].join(", ")}]
     > ${args[1]}`
    );
  });
});

test.run();
