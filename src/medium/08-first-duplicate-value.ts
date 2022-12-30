export function firstDuplicateValue(array: readonly number[]): number {
  const map: Record<number, boolean> = {};

  for (const x of array) {
    if (x in map) return x;
    else map[x] = true;
  }

  return -1;
}
