import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { generateDocument } from "./21-generate-document";

test("is able to generate document from passed characters", () => {
  const testCases: TestCases<typeof generateDocument> = [
    [["xd", ""], true],
    [["d", "d"], true],
    [["Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"], true],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      generateDocument(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
