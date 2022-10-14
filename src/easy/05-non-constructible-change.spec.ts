import { runTestCases, type TestCases } from "../utils";

import { nonConstructibleChange as fn } from "./05-non-constructible-change";

test("returns the smallest non constructible change", () => {
  const testCases: TestCases<typeof fn> = [
    [[[]], 1],
    [[[1]], 2],
    [[[2]], 1],
    [[[1, 7]], 2],
    [[[1, 2, 5]], 4],
    [[[1, 1, 1, 1, 1]], 6],
    [[[1, 1, 2, 3, 5, 7, 22]], 20],
  ];

  runTestCases(fn, testCases);
});
