import { runTestCases, TestCases } from "../utils";

import { oneEdit as fn } from "./17-one-edit";

test("check if strings are equal after making at most one edit", () => {
  const testCases: TestCases<typeof fn> = [
    [["hello", "hollo"], true],
    [["hello", "holol"], false],
    [["hellooo", "hollo"], false],
    [["bcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"], true],
    [["abcdefghijklmnopqrstuvwxyz", "abcdefghijklnopqrstuvwxyz"], true],
    [["abcdefghijklmnopqrstuvwxyz", "abcdefghijklmmnopqrstuvwxyz"], true],
  ];

  runTestCases(fn, testCases);
});
