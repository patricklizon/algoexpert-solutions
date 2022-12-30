import { runTestCases, TestCases } from "../utils";

import { arrayOfProducts as fn } from "./07-array-of-products";

test("finds the highest peak", () => {
  const testCases: TestCases<typeof fn> = [
    [[[]], []],
    [[[5, 1, 4, 2]], [8, 40, 10, 20]],
  ];

  runTestCases(fn, testCases);
});
