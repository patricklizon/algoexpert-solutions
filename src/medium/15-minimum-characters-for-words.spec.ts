import { runTestCases, TestCases } from "../utils";

import { minimumCharactersForWords as fn } from "./15-minimum-characters-for-words";

test("returns an array of minimal characters needed to build one of the words", () => {
  const testCases: TestCases<typeof fn> = [
    [[[""]], []],
    [[["a", "abc", "ab", "boo"]], ["a", "b", "c", "o", "o"]],
    [[["a"]], ["a"]],
    [[["!!!2", "234", "222", "432"]], ["!", "!", "!", "2", "2", "2", "3", "4"]],
    [
      [["this", "that", "did", "deed", "them!", "a"]],
      ["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"],
    ],
    [
      [["168712hn3;nlsdjhahjdksaxa097918@#$RT%T^&*()_"]],
      [
        "1",
        "1",
        "1",
        "6",
        "8",
        "8",
        "7",
        "7",
        "2",
        "h",
        "h",
        "h",
        "n",
        "n",
        "3",
        ";",
        "l",
        "s",
        "s",
        "d",
        "d",
        "j",
        "j",
        "a",
        "a",
        "a",
        "k",
        "x",
        "0",
        "9",
        "9",
        "@",
        "#",
        "$",
        "R",
        "T",
        "T",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "_",
      ],
    ],
  ];

  runTestCases(fn, testCases);
});
