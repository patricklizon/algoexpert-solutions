import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { tandemBicycle } from "./12-tandem-bicycle";

test("returns fastest or slowest total speed of riders", () => {
  const testCases: TestCases<typeof tandemBicycle> = [
    [
      [
        {
          redShirtSpeeds: [5, 5, 3, 9, 2],
          blueShirtSpeeds: [3, 6, 7, 2, 1],
          fastest: true,
        },
      ],
      32,
    ],
    [
      [
        {
          redShirtSpeeds: [5, 5, 3, 9, 2],
          blueShirtSpeeds: [3, 6, 7, 2, 1],
          fastest: false,
        },
      ],
      25,
    ],
    [
      [
        {
          redShirtSpeeds: [1, 2, 1, 9, 12, 3],
          blueShirtSpeeds: [3, 3, 4, 6, 1, 2],
          fastest: true,
        },
      ],
      37,
    ],
    [
      [
        {
          redShirtSpeeds: [1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1],
          blueShirtSpeeds: [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32],
          fastest: true,
        },
      ],
      816,
    ],
    [
      [
        {
          redShirtSpeeds: [1, 2, 1, 9, 12, 3, 1, 54, 21, 231, 32, 1],
          blueShirtSpeeds: [3, 3, 4, 6, 1, 2, 5, 6, 34, 256, 123, 32],
          fastest: false,
        },
      ],
      484,
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      tandemBicycle(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
