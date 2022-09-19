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

import { isNil } from "../utils";
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
  return find(tree, target, tree.value);
}

function find(
  tree: Nullable<BST>,
  target: number,
  closestValue: number
): number {
  if (isNil(tree)) return closestValue;

  if (Math.abs(target - closestValue) > Math.abs(target - tree.value)) {
    closestValue = tree.value;
  }

  if (target < tree.value) return find(tree.left, target, closestValue);
  if (target > tree.value) return find(tree.right, target, closestValue);
  return closestValue;
}
