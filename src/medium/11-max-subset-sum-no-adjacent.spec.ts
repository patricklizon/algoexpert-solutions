import { runTestCases, TestCases } from "../utils";

import { maxSubsetSumNoAdjacent as fn } from "./11-max-subset-sum-no-adjacent";

test("returns correct sum", () => {
  const testCases: TestCases<typeof fn> = [
    [[[]], 0],
    [[[1]], 1],
    [[[1, 2]], 2],
    [[[1, 2, 3]], 4],
    [[[1, 15, 3]], 15],
    [[[75, 105, 120, 75, 90, 135]], 330],
    [[[10, 5, 20, 25, 15, 5, 5, 15, 3, 15, 5, 5, 15]], 90],
  ];

  runTestCases(fn, testCases);
});
