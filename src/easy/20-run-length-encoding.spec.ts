import { runTestCases, TestCases } from "../utils";

import { runLengthEncoding as fn } from "./20-run-length-encoding";

test("compresses non empty string", () => {
  const testCases: TestCases<typeof fn> = [
    [["AB"], "1A1B"],
    [["AAAAAAAAAAAAABBCCCCDD"], "9A4A2B4C2D"],
    [["aAaAaaaaaAaaaAAAABbbbBBBB"], "1a1A1a1A5a1A3a4A1B3b4B"],
  ];

  runTestCases(fn, testCases);
});
