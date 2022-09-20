import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";
import { makeBinaryTree } from "../utils/tree";

import { nodeDepths } from "./08-node-depth";

test("sums depths of binary tree's nodes", () => {
  const testCases: TestCases<typeof nodeDepths> = [
    [
      [
        makeBinaryTree({
          nodes: [
            { id: "1", left: "2", right: "3", value: 1 },
            { id: "2", left: "4", right: "5", value: 2 },
            { id: "3", left: "6", right: "7", value: 3 },
            { id: "4", left: "8", right: "9", value: 4 },
            { id: "5", left: null, right: null, value: 5 },
            { id: "6", left: null, right: null, value: 6 },
            { id: "7", left: null, right: null, value: 7 },
            { id: "8", left: null, right: null, value: 8 },
            { id: "9", left: null, right: null, value: 9 },
          ],
          root: "1",
        }),
      ],
      16,
    ],
    [
      [
        makeBinaryTree({
          nodes: [{ id: "1", left: null, right: null, value: 1 }],
          root: "1",
        }),
      ],
      0,
    ],
    [
      [
        makeBinaryTree({
          nodes: [
            { id: "1", left: "2", right: null, value: 1 },
            { id: "2", left: null, right: null, value: 2 },
          ],
          root: "1",
        }),
      ],
      1,
    ],
    [
      [
        makeBinaryTree({
          nodes: [
            { id: "1", left: "2", right: "3", value: 1 },
            { id: "2", left: null, right: null, value: 2 },
            { id: "3", left: null, right: null, value: 3 },
          ],
          root: "1",
        }),
      ],
      2,
    ],
    [
      [
        makeBinaryTree({
          nodes: [
            { id: "1", left: "2", right: "8", value: 1 },
            { id: "2", left: "3", right: null, value: 2 },
            { id: "3", left: "4", right: null, value: 3 },
            { id: "4", left: "5", right: null, value: 4 },
            { id: "5", left: "6", right: null, value: 5 },
            { id: "6", left: null, right: "7", value: 6 },
            { id: "7", left: null, right: null, value: 7 },
            { id: "8", left: null, right: "9", value: 8 },
            { id: "9", left: null, right: "10", value: 9 },
            { id: "10", left: null, right: "11", value: 10 },
            { id: "11", left: null, right: "12", value: 11 },
            { id: "12", left: "13", right: null, value: 12 },
            { id: "13", left: null, right: null, value: 13 },
          ],
          root: "1",
        }),
      ],
      42,
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      nodeDepths(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
