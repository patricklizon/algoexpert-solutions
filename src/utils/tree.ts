import { type Nullable } from ".";

export type TreeSchema = {
  root: string;
  nodes: {
    id: string;
    left: Nullable<string>;
    right: Nullable<string>;
    value: number;
  }[];
};

export class BinaryTree {
  value: number;
  left: Nullable<BinaryTree>;
  right: Nullable<BinaryTree>;

  constructor(value: number) {
    this.value = value;
  }
}

export function makeBinaryTree(schema: TreeSchema): BinaryTree {
  const rootNode = schema.nodes.find((n) => n.id === schema.root);
  if (!rootNode) throw new Error(`root node ${schema.root} is not defined`);

  const tree = new BinaryTree(rootNode.value);

  tree.left = makeNode(schema.nodes, rootNode.left);
  tree.right = makeNode(schema.nodes, rootNode.right);

  return tree;
}

function makeNode(
  nodes: TreeSchema["nodes"],
  id: Nullable<string>
): Nullable<BinaryTree> {
  if (!id) return null;
  const node = nodes.find((n) => n.id === id);
  if (!node) throw new Error(`branch node "${id}" is not defined`);

  const tree = new BinaryTree(node.value);
  tree.left = makeNode(nodes, node.left);
  tree.right = makeNode(nodes, node.right);

  return tree;
}
