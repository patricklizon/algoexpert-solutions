import { runTestCases, TestCases } from "../utils";

import { classPhotos as fn } from "./11-class-photo";

test("checks if group photo could be taken according to restrictions", () => {
  const testCases: TestCases<typeof fn> = [
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

  runTestCases(fn, testCases);
});
