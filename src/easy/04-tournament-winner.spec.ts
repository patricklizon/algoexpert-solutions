import { test } from "uvu";
import assert from "uvu/assert";

import { type TestCases } from "../utils";

import { tournamentWinner } from "./04-tournament-winner";

test("returns the name of the team with the highest score", () => {
  const testCases: TestCases<typeof tournamentWinner> = [
    [
      [
        [
          ["HTML", "C#"],
          ["C#", "Python"],
          ["Python", "HTML"],
        ],
        [0, 0, 1],
      ],
      "Python",
    ],
    [
      [
        [
          ["HTML", "Java"],
          ["Java", "Python"],
          ["Python", "HTML"],
        ],
        [0, 1, 1],
      ],
      "Java",
    ],
    [
      [
        [
          ["HTML", "Java"],
          ["Java", "Python"],
          ["Python", "HTML"],
          ["C#", "Python"],
          ["Java", "C#"],
          ["C#", "HTML"],
        ],
        [0, 1, 1, 1, 0, 1],
      ],
      "C#",
    ],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      tournamentWinner(...args),
      expected,
      `failed test case at idx: ${idx} for args:
     > [${args[0].map((a) => a.join(", ")).join(", ")}]
     > [${args[1].join(", ")}]`
    );
  });
});

test.run();
