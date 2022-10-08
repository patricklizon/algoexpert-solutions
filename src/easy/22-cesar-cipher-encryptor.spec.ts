import { test } from "uvu";
import assert from "uvu/assert";

import type { TestCases } from "../utils";

import { caesarCipherEncryptor } from "./22-cesar-cipher-encryptor";

test("is encrypts characters correctly", () => {
  const testCases: TestCases<typeof caesarCipherEncryptor> = [
    [["", 12], ""],
    [["xyz", 0], "xyz"],
    [["xyz", 2], "zab"],
    [["ovmqkwtujqmfkao", 52], "ovmqkwtujqmfkao"],
  ];

  testCases.forEach(([args, expected], idx) => {
    assert.equal(
      caesarCipherEncryptor(...args),
      expected,
      `failed test case at idx: ${idx}`
    );
  });
});

test.run();
