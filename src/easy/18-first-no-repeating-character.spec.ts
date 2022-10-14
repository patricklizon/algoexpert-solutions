import { runTestCases, TestCases } from "../utils";

import { firstNonRepeatingCharacter as fn } from "./18-first-no-repeating-character";

test("returns index of first non repeating character", () => {
  const testCases: TestCases<typeof fn> = [
    [["abcdcaf"], 1],
    [["faadabcbbebdf"], 6],
    [[""], -1],
    [["a"], 0],
  ];

  runTestCases(fn, testCases);
});
