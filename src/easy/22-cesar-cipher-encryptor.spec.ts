import { runTestCases, TestCases } from "../utils";

import { caesarCipherEncryptor as fn } from "./22-cesar-cipher-encryptor";

test("is encrypts characters correctly", () => {
  const testCases: TestCases<typeof fn> = [
    [["", 12], ""],
    [["xyz", 0], "xyz"],
    [["xyz", 2], "zab"],
    [["ovmqkwtujqmfkao", 52], "ovmqkwtujqmfkao"],
  ];

  runTestCases(fn, testCases);
});
