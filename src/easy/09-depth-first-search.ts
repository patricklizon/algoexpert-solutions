/**

  You're given a Node class that has a name and an
  array of optional children nodes. When put together, nodes form
  an acyclic tree-like structure.


  Implement the depthFirstSearch method on the
  Node class, which takes in an empty array, traverses the tree
  using the Depth-first Search approach (specifically navigating the tree from
  left to right), stores all of the nodes' names in the input array, and returns
  it.


  If you're unfamiliar with Depth-first Search, we recommend watching the
  Conceptual Overview section of this question's video explanation before
  starting to code.

Sample Input
graph = A
     /  |  \
    B   C   D
   / \     / \
  E   F   G   H
     / \   \
    I   J   K

Sample Output
["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]


 */

import { Graph } from "../utils/graph";

export function depthFirstSearch(graph: Readonly<Graph<string>>): string[] {
  const nodeValues: string[] = [];
  search(graph, nodeValues);
  return nodeValues;
}

function search(graph: Readonly<Graph<string>>, nodeValues: string[]): void {
  nodeValues.push(graph.value);
  graph.children.forEach((c) => search(c, nodeValues));
}
