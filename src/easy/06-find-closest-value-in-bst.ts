/**


  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.

  You can assume that there will only be one closest value.

  Each BST node has an integer value, a left child node, and a right child node.
  A node is said to be a valid BST node if and only if it satisfies the BST property:
  its value is strictly greater than the values of every node to its left;
  its value is less than or equal to the values of every node to its right;
  and its children nodes are either valid BST nodes themselves or None / null.

  Sample Input
  tree =   10
        /     \
        5      15
      /   \   /   \
    2     5 13   22
  /           \
  1            14
  target = 12

  Sample Output
  13

 *
 */

import { type Nullable } from "../utils/types";

export class BST {
  value: number;
  left: Nullable<BST>;
  right: Nullable<BST>;

  constructor(value: number, left: Nullable<BST>, right: Nullable<BST>) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function findClosestValueInBst(tree: BST, target: number): number {
  return pickPath(tree, target, tree.value);
}

function pickPath(
  node: Nullable<BST>,
  target: number,
  closestValue: number
): number {
  if (closestValue === target) return target;

  const leftDelta = Math.abs((node?.left?.value ?? 0) - target);
  const rightDelta = Math.abs((node?.right?.value ?? 0) - target);

  // turn left
  if (leftDelta < rightDelta) {
    return node?.left
      ? pickTurn(node.left, target, closestValue)
      : closestValue;
  }

  // turn right
  if (rightDelta < leftDelta) {
    return node?.right
      ? pickTurn(node.right, target, closestValue)
      : closestValue;
  }

  return closestValue;
}

function pickTurn(node: BST, target: number, closestValue: number): number {
  if (isNil(node)) return closestValue;
  const closestDelta = Math.abs(closestValue - target);
  const turnDelta = Math.abs(node.value - target);

  return pickPath(
    node,
    target,
    closestDelta < turnDelta ? closestValue : node.value
  );
}

function isNil(x: unknown): x is null | undefined {
  return x === null || x === undefined;
}
