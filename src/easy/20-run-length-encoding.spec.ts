import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { runLengthEncoding } from "./20-run-length-encoding";

test("compresses non empty string", () => {
  const testCases: TestCases<typeof runLengthEncoding> = [
    [["AB"], "1A1B"],
    [["AAAAAAAAAAAAABBCCCCDD"], "9A4A2B4C2D"],
    [["aAaAaaaaaAaaaAAAABbbbBBBB"], "1a1A1a1A5a1A3a4A1B3b4B"],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      runLengthEncoding(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
