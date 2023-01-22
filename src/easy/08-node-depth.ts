/**


  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.


  Write a function that takes in a Binary Tree and returns the sum of its nodes
  depths.


  Each BinaryTree node has an integer value, a
  left child node, and a right child node. Children
  nodes can either be BinaryTree nodes themselves or
  None / null.

  Sample Input
  tree =    1
        /     \
        2       3
      /   \   /   \
    4     5 6     7
  /   \
  8     9

  Sample Output
  16
  // The depth of the node with value 2 is 1.
  // The depth of the node with value 3 is 1.
  // The depth of the node with value 4 is 2.
  // The depth of the node with value 5 is 2.
  // Etc..
  // Summing all of these depths yields 16.


 *
 */

import { BinaryTree } from "../utils/tree";

export function nodeDepths(root: Readonly<BinaryTree>): number {
  const stack: Readonly<{ node: BinaryTree; depth: number }>[] = [];
  let sum = 0;

  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const s = stack.pop();
    if (!s) throw new Error("never");

    sum += s.depth;

    if (s.node.left) stack.push({ node: s.node.left, depth: s.depth + 1 });
    if (s.node.right) stack.push({ node: s.node.right, depth: s.depth + 1 });
  }

  return sum;
}
