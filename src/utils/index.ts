export type Nullable<T> = T | null | undefined;

export type TestCases<F extends (...args: any) => any> = [
  args: Parameters<F>,
  expected: ReturnType<F>
][];

export function isNil(x: unknown): x is null | undefined {
  return x === null || x === undefined;
}
