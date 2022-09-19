import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";
import { makeTree } from "../utils/tree";

import { branchSums } from "./07-branch-sums";

test("sums branches of binary tree", () => {
  const testCases: TestCases<typeof branchSums> = [
    [
      [
        makeTree({
          nodes: [
            { id: "1", left: "2", right: "3", value: 1 },
            { id: "2", left: "4", right: "5", value: 2 },
            { id: "3", left: "6", right: "7", value: 3 },
            { id: "4", left: "8", right: "9", value: 4 },
            { id: "5", left: "10", right: null, value: 5 },
            { id: "6", left: null, right: null, value: 6 },
            { id: "7", left: null, right: null, value: 7 },
            { id: "8", left: null, right: null, value: 8 },
            { id: "9", left: null, right: null, value: 9 },
            { id: "10", left: null, right: null, value: 10 },
          ],
          root: "1",
        }),
      ],
      [15, 16, 18, 10, 11],
    ],
    [
      [
        makeTree({
          nodes: [{ id: "1", left: null, right: null, value: 1 }],
          root: "1",
        }),
      ],
      [1],
    ],
    [
      [
        makeTree({
          nodes: [
            { id: "1", left: "2", right: null, value: 1 },
            { id: "2", left: null, right: null, value: 2 },
          ],
          root: "1",
        }),
      ],
      [3],
    ],
    [
      [
        makeTree({
          nodes: [
            { id: "1", left: "2", right: "3", value: 1 },
            { id: "2", left: null, right: null, value: 2 },
            { id: "3", left: null, right: null, value: 3 },
          ],
          root: "1",
        }),
      ],
      [3, 4],
    ],
    [
      [
        makeTree({
          nodes: [
            { id: "0", left: "9", right: "1", value: 0 },
            { id: "9", left: null, right: null, value: 9 },
            { id: "1", left: "15", right: "10", value: 1 },
            { id: "15", left: null, right: null, value: 15 },
            { id: "10", left: "100", right: "200", value: 10 },
            { id: "100", left: null, right: null, value: 100 },
            { id: "200", left: null, right: null, value: 200 },
          ],
          root: "0",
        }),
      ],
      [9, 16, 111, 211],
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      branchSums(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
