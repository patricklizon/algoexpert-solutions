export type Nullable<T> = T | null | undefined;

export type TestCases<F extends (...args: any) => any> = [
  args: Parameters<F>,
  expected: ReturnType<F>
][];
