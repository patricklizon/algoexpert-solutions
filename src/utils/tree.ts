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

  constructor(
    value: number,
    left: Nullable<BinaryTree>,
    right: Nullable<BinaryTree>
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function makeBinaryTree(schema: TreeSchema): BinaryTree {
  const rootNode = schema.nodes.find((n) => n.id === schema.root);
  if (!rootNode) throw new Error(`root node ${schema.root} is not defined`);

  return new BinaryTree(
    rootNode.value,
    makeNode(schema.nodes, rootNode.left),
    makeNode(schema.nodes, rootNode.right)
  );
}

function makeNode(
  nodes: TreeSchema["nodes"],
  id: Nullable<string>
): Nullable<BinaryTree> {
  if (!id) return null;
  const node = nodes.find((n) => n.id === id);
  if (!node) throw new Error(`branch node "${id}" is not defined`);

  return new BinaryTree(
    node.value,
    makeNode(nodes, node.left),
    makeNode(nodes, node.right)
  );
}
