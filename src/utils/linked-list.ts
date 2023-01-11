import { type Nullable } from ".";

export type LinkedListSchema<T> = {
  head: string;
  nodes: { id: string; next: Nullable<string>; value: T }[];
};

export class LinkedList<T> {
  value: T;
  next: Nullable<LinkedList<T>>;

  constructor(value: T, next?: Nullable<LinkedList<T>>) {
    this.value = value;
    this.next = next;
  }
}

export function makeLinkedList<T>(schema: LinkedListSchema<T>): LinkedList<T> {
  const head = schema.nodes.find((n) => n.id === schema.head);
  if (!head) throw new Error(`head "${schema.head}"" is not defined`);

  return new LinkedList(head.value, makeNode(schema.nodes, head.next));
}

function makeNode<T>(
  nodes: LinkedListSchema<T>["nodes"],
  id: Nullable<string>
): Nullable<LinkedList<T>> {
  const node = nodes.find((n) => n.id === id);
  if (!node) return null;

  return new LinkedList<T>(node.value, makeNode(nodes, node.next));
}
