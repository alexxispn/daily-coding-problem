(() => {
    class Node {
        constructor(
            public val: string,
            public left: Node | null = null,
            public right: Node | null = null
        ) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    const serialize = (node: Node | null): string => {
        if (!node) return 'X';
        return `${node.val} ${serialize(node.left)} ${serialize(node.right)}`;
    };

    const deserialize = (serialized: string): Node | null => {
        const nodes = serialized.split(' ');
        const buildNode = (): Node | null => {
            const val = nodes.shift();
            if (val === 'X') return null;
            return new Node(val as string, buildNode(), buildNode());
        };
        return buildNode();
    }

    const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
    console.log(serialize(node));
    console.log(deserialize(serialize(node)));
    console.log(node.left?.left?.val);
    if (deserialize(serialize(node))?.left?.left?.val === 'left.left') {
        console.log('Deserialized correctly');
    } else {
        console.log('Deserialized incorrectly');
    }
})();
