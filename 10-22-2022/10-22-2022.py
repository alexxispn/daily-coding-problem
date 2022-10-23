class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def serialize(node: Node) -> str:
    if node is None:
        return 'None'
    return f"{node.val} {serialize(node.left)} {serialize(node.right)}"


def deserialize(directories: str) -> Node or None:
    if directories == 'None':
        return None
    directories = directories.split()

    def _deserialize():
        val = directories.pop(0)
        if val == 'None':
            return None
        return Node(val, _deserialize(), _deserialize())

    return _deserialize()


node = Node('root', Node('left', Node('left.left')), Node('right'))
print(serialize(node))
assert deserialize(serialize(node)).left.left.val == 'left.left'
assert node.left.left.val == 'left.left'
assert (deserialize(serialize(node)).right.val == 'right')
assert node.right.val == 'right'
