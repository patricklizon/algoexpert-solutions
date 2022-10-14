import { runTestCases, type TestCases } from "../utils";

import { tournamentWinner as fn } from "./04-tournament-winner";

test("returns the name of the team with the highest score", () => {
  const testCases: TestCases<typeof fn> = [
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

  runTestCases(fn, testCases);
});
