import { runTestCases, TestCases } from "../utils";

import { getNthFib as fn } from "./14-nth-fibonacci";

test("calculates nth fibonacci number", () => {
  const testCases: TestCases<typeof fn> = [
    [[1], 0],
    [[2], 1],
    [[6], 5],
    [[18], 1597],
  ];

  runTestCases(fn, testCases);
});
