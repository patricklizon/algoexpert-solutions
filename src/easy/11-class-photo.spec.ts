import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { classPhotos } from "./11-class-photo";

test("checks if group photo could be taken according to restrictions", () => {
  const testCases: TestCases<typeof classPhotos> = [
    [
      [
        {
          redShirtHeights: [5, 8, 1, 3, 4],
          blueShirtHeights: [6, 9, 2, 4, 5],
        },
      ],
      true,
    ],
    [
      [
        {
          redShirtHeights: [6, 9, 2, 4, 5],
          blueShirtHeights: [5, 8, 1, 3, 4],
        },
      ],
      true,
    ],
    [
      [
        {
          redShirtHeights: [6, 9, 2, 4, 5, 1],
          blueShirtHeights: [5, 8, 1, 3, 4, 9],
        },
      ],
      false,
    ],
    [
      [
        {
          redShirtHeights: [6],
          blueShirtHeights: [6],
        },
      ],
      false,
    ],
    [
      [
        {
          redShirtHeights: [1, 1, 1, 1, 1, 1, 1, 1],
          blueShirtHeights: [5, 6, 7, 2, 3, 1, 2, 3],
        },
      ],
      false,
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      classPhotos(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
