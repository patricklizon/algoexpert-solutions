import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";
import { makeLinkedList } from "../utils/linked-list";

import { removeDuplicatesFromLinkedList } from "./13-remove-duplicates-from-linked-list";

test("removes duplicates from linked list", () => {
  const testCases: TestCases<typeof removeDuplicatesFromLinkedList> = [
    [
      [
        makeLinkedList({
          head: "1",
          nodes: [
            { id: "1", next: "1-2", value: 1 },
            { id: "1-2", next: "1-3", value: 1 },
            { id: "1-3", next: "2", value: 1 },
            { id: "2", next: "3", value: 3 },
            { id: "3", next: "3-2", value: 4 },
            { id: "3-2", next: "3-3", value: 4 },
            { id: "3-3", next: "4", value: 4 },
            { id: "4", next: "5", value: 5 },
            { id: "5", next: "5-2", value: 6 },
            { id: "5-2", next: null, value: 6 },
          ],
        }),
      ],
      makeLinkedList({
        head: "1",
        nodes: [
          { id: "1", next: "3", value: 1 },
          { id: "3", next: "4", value: 3 },
          { id: "4", next: "5", value: 4 },
          { id: "5", next: "6", value: 5 },
          { id: "6", next: null, value: 6 },
        ],
      }),
    ],
    [
      [
        makeLinkedList({
          head: "1",
          nodes: [
            { id: "1", next: "1-2", value: 1 },
            { id: "1-2", next: "1-3", value: 1 },
            { id: "1-3", next: "1-4", value: 1 },
            { id: "1-4", next: "1-5", value: 1 },
            { id: "1-5", next: "4", value: 1 },
            { id: "4", next: "4-2", value: 4 },
            { id: "4-2", next: "5", value: 4 },
            { id: "5", next: "6", value: 5 },
            { id: "6", next: "6-2", value: 6 },
            { id: "6-2", next: null, value: 6 },
          ],
        }),
      ],
      makeLinkedList({
        head: "1",
        nodes: [
          { id: "1", next: "4", value: 1 },
          { id: "4", next: "5", value: 4 },
          { id: "5", next: "6", value: 5 },
          { id: "6", next: null, value: 6 },
        ],
      }),
    ],
    [
      [
        makeLinkedList({
          head: "1",
          nodes: [
            { id: "1", next: "1-2", value: 1 },
            { id: "1-2", next: "1-3", value: 1 },
            { id: "1-3", next: "1-4", value: 1 },
            { id: "1-4", next: "1-5", value: 1 },
            { id: "1-5", next: "1-6", value: 1 },
            { id: "1-6", next: "1-7", value: 1 },
            { id: "1-7", next: null, value: 1 },
          ],
        }),
      ],
      makeLinkedList({
        head: "1",
        nodes: [{ id: "1", next: null, value: 1 }],
      }),
    ],
    [
      [
        makeLinkedList({
          head: "1",
          nodes: [{ id: "1", next: null, value: 1 }],
        }),
      ],
      makeLinkedList({
        head: "1",
        nodes: [{ id: "1", next: null, value: 1 }],
      }),
    ],
    [
      [
        makeLinkedList({
          head: "1",
          nodes: [
            { id: "1", next: "2", value: 1 },
            { id: "2", next: "3", value: 2 },
            { id: "3", next: "4", value: 3 },
            { id: "4", next: "5", value: 4 },
            { id: "5", next: "6", value: 5 },
            { id: "6", next: "7", value: 6 },
            { id: "7", next: "8", value: 7 },
            { id: "8", next: "9", value: 8 },
            { id: "9", next: "10", value: 9 },
            { id: "10", next: "11", value: 10 },
            { id: "11", next: "12", value: 11 },
            { id: "12", next: "12-2", value: 12 },
            { id: "12-2", next: null, value: 12 },
          ],
        }),
      ],
      makeLinkedList({
        head: "1",
        nodes: [
          { id: "1", next: "2", value: 1 },
          { id: "2", next: "3", value: 2 },
          { id: "3", next: "4", value: 3 },
          { id: "4", next: "5", value: 4 },
          { id: "5", next: "6", value: 5 },
          { id: "6", next: "7", value: 6 },
          { id: "7", next: "8", value: 7 },
          { id: "8", next: "9", value: 8 },
          { id: "9", next: "10", value: 9 },
          { id: "10", next: "11", value: 10 },
          { id: "11", next: "12", value: 11 },
          { id: "12", next: null, value: 12 },
        ],
      }),
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      removeDuplicatesFromLinkedList(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
