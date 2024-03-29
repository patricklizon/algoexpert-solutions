export type Nullable<T> = T | null | undefined;

export function isNil(x: unknown): x is null | undefined {
  return x === null || x === undefined;
}

export type TestCases<F extends (...args: any) => any> = [
  args: Parameters<F>,
  expected: ReturnType<F>
][];

export function runTestCases<F extends (...args: any[]) => any>(
  fn: F,
  testCases: TestCases<F>
): void {
  testCases.forEach(([args, expected], idx) => {
    assert.deepEqual(fn(...args), expected, `failed test case at idx: ${idx}`);
  });
}
