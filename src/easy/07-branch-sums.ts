/**


  Write a function that takes in a Binary Tree and returns a list of its branch
  sums ordered from leftmost branch sum to rightmost branch sum.


  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
  branch is a path of nodes in a tree that starts at the root node and ends at
  any leaf node.


  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  Sample Input
  tree =     1
          /     \
        2       3
      /   \    /  \
      4     5  6    7
    /   \  /
  8    9 10

  Sample Output
  [15, 16, 18, 10, 11]
  // 15 == 1 + 2 + 4 + 8
  // 16 == 1 + 2 + 4 + 9
  // 18 == 1 + 2 + 5 + 10
  // 10 == 1 + 3 + 6
  // 11 == 1 + 3 + 7


 *
 */

import { isNil } from "../utils";
import { BinaryTree } from "../utils/tree";

export function branchSums(root: Readonly<BinaryTree>): number[] {
  const sums: number[] = [];
  sumBranch(root, 0, sums);
  return sums;
}

function sumBranch(tree: BinaryTree, sum: number, sums: number[]): void {
  sum += tree.value;

  const isLeaf = isNil(tree.left) && isNil(tree.right);
  if (isLeaf) {
    sums.push(sum);
    return;
  }

  if (tree.left) sumBranch(tree.left, sum, sums);
  if (tree.right) sumBranch(tree.right, sum, sums);
}
