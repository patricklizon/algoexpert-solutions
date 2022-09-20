import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { minimumWaitingTime } from "./10-minimum-waiting-time";

test("returns a minimum waiting time for the last query", () => {
  const testCases: TestCases<typeof minimumWaitingTime> = [
    [[[5, 1, 4]], 6],
    [[[3, 2, 1, 2, 6]], 17],
    [[[4, 3, 1, 1, 3, 2, 1, 8]], 45],
    [[[7]], 0],
    [[[1, 9]], 1],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      minimumWaitingTime(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
