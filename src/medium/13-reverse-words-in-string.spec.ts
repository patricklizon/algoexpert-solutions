import { runTestCases, TestCases } from "../utils";

import { reverseWordsInString as fn } from "./13-reverse-words-in-string";

test("reverses words in string", () => {
  const testCases: TestCases<typeof fn> = [
    [["AlgoExpert is the best!"], "best! the is AlgoExpert"],
    [["tim is    great"], "great    is tim"],
    [
      ["this this words this this this words this"],
      "this words this this this words this this",
    ],
  ];

  runTestCases(fn, testCases);
});
