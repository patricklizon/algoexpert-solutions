import { isNil } from ".";

type GraphSchema<T = any> = {
  startNode: string;
  nodes: {
    id: string;
    children: string[];
    value: T;
  }[];
};

export class Graph<T = any> {
  value: T;
  children: Graph<T>[];

  constructor(value: T, children: Graph<T>[]) {
    this.value = value;
    this.children = children;
  }
}

export function makeGraph(schema: GraphSchema): Graph {
  const rootNode = schema.nodes.find((n) => n.id === schema.startNode);
  if (!rootNode)
    throw new Error(`root node ${schema.startNode} is not defined`);

  return new Graph(rootNode.value, makeNodes(schema.nodes, rootNode.id));
}

function makeNodes(nodes: GraphSchema["nodes"], id: string): Graph[] {
  const node = nodes.find((n) => n.id === id);
  if (!node) throw new Error(`branch node "${id}" is not defined`);

  return node.children.map((cId) => {
    const childNode = nodes.find((n) => n.id === cId);
    if (isNil(childNode)) {
      throw new Error(`Could not find a child node "${cId}"`);
    }

    return new Graph(childNode.value, makeNodes(nodes, childNode.id));
  });
}
