import { runTestCases, TestCases } from "../utils";

import { generateDocument as fn } from "./21-generate-document";

test("is able to generate document from passed characters", () => {
  const testCases: TestCases<typeof fn> = [
    [["xd", ""], true],
    [["d", "d"], true],
    [["Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"], true],
  ];

  runTestCases(fn, testCases);
});
