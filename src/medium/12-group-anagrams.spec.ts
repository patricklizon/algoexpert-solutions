import { runTestCases, TestCases } from "../utils";

import { groupAnagrams as fn } from "./12-group-anagrams";

test("returns grouped anagrams", () => {
  const testCases: TestCases<typeof fn> = [
    [[[]], []],
    [[["", ""]], []],
    [[["a", "v"]], [["a"], ["v"]]],
    [
      [["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]],
      [["yo", "oy"], ["act", "tac", "cat"], ["flop", "olfp"], ["foo"]],
    ],
    [[["test"]], [["test"]]],
    [[["abc", "cba", "bca"]], [["abc", "cba", "bca"]]],
  ];

  runTestCases(fn, testCases);
});
