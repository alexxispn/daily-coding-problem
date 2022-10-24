(() => {

    interface NodeProps {
        val: string;
        left: NodeProps | null;
        right: NodeProps | null;
    }

    class Node {
        public val: string;
        public left: NodeProps | null;
        public right: NodeProps | null;

        constructor(props: NodeProps) {
            this.val = props.val;
            this.left = props.left;
            this.right = props.right;
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
            return new Node({
                val,
                left: buildNode(),
                right: buildNode(),
            } as NodeProps);
        };
        return buildNode();
    }

    const node = new Node({
        val: 'root',
        right: new Node({val: 'right'} as NodeProps),
        left: new Node({val: 'left', left: new Node({val: 'left.left'} as NodeProps)} as NodeProps),
    });

    console.log(serialize(node));
    console.log(deserialize(serialize(node)));
    console.log(node.left?.left?.val);
    if (deserialize(serialize(node))?.left?.left?.val === 'left.left') {
        console.log('Deserialized correctly');
    } else {
        console.log('Deserialized incorrectly');
    }
})();
