class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def serialize(node: Node) -> str:
    if node is None:
        return 'X'
    return f"{node.val} {serialize(node.left)} {serialize(node.right)}"


def deserialize(serialized: str) -> Node or None:
    nodes = serialized.split()

    def generate_node() -> Node or None:
        val = nodes.pop(0)
        if val == 'X':
            return None
        return Node(val, generate_node(), generate_node())

    return generate_node()


node = Node('root', Node('left', Node('left.left')), Node('right'))
print(serialize(node))
assert deserialize(serialize(node)).left.left.val == 'left.left'
assert node.left.left.val == 'left.left'
assert (deserialize(serialize(node)).right.val == 'right')
assert node.right.val == 'right'
