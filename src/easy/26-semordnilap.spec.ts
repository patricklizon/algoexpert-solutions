import { runTestCases, TestCases } from "../utils";

import { semordnilap as fn } from "./26-semordnilap";

test("returns all semordnilap pairs", () => {
  const testCases: TestCases<typeof fn> = [
    [[[]], []],
    [
      [["diaper", "abc", "test", "cba", "repaid"]],
      [
        ["diaper", "repaid"],
        ["abc", "cba"],
      ],
    ],
    [[["dog", "god"]], [["dog", "god"]]],
    [[["aaa", "bbbb"]], []],
  ];

  runTestCases(fn, testCases);
});
