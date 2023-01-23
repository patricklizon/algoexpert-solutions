import { runTestCases, TestCases } from "../utils";

import { balancedBrackets as fn } from "./14-balanced-brackets";

test("checks whether string has balanced brackets or not", () => {
  const testCases: TestCases<typeof fn> = [
    [["([])(){}(())()()"], true],
    [["([]{}{"], false],
    [[")[]{}{"], false],
    [["(()agwg())((()agwga()())gawgwgag)"], true],
    [["{}gawgw()"], true],
    [["(agwgg)([ghhheah%&@Q])"], true],
  ];

  runTestCases(fn, testCases);
});
