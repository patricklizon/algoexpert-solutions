import { runTestCases, TestCases } from "../utils";

import { productSum as fn } from "./15-product-sum";

test("calculates product sum of passed numbers", () => {
  const testCases: TestCases<typeof fn> = [
    [[[5, 2, [7, -1], 3, [6, [-13, 8], 4]]], 12],
    [[[1, 2, 3, 4, 5]], 15],
    [[[1, 2, [3], 4, 5]], 18],
    [[[[1, 2], 3, [4, 5]]], 27],
  ];

  runTestCases(fn, testCases);
});
