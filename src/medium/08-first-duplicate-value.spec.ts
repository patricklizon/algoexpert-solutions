import { runTestCases, TestCases } from "../utils";

import { firstDuplicateValue as fn } from "./08-first-duplicate-value";

test("finds first duplicated value", () => {
  const testCases: TestCases<typeof fn> = [
    [[[]], -1],
    [[[2, 1, 5, 3, 4]], -1],
    [[[2, 1, 5, 2, 3, 3, 4]], 2],
    [[[2, 1, 5, 3, 3, 2, 4]], 3],
  ];

  runTestCases(fn, testCases);
});
