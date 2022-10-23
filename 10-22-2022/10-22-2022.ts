(() => {
    class Node {
        public val: string;
        public left: Node | null;
        public right: Node | null;

        constructor(val: string, left: Node | null = null, right: Node | null = null) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }


    const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

    const serialize = (node: Node | null): string => {
        if (node === null) return 'X';
        return `${node.val} ${serialize(node.left)} ${serialize(node.right)}`;
    };

    const deserialize = (serialized: string): Node | null | undefined => {
        if (serialized === 'X') return null;
        const trees = serialized.split(' ');
        const buildTree = (trees: string[]): Node | null => {
            const val = trees.shift();
            if (val === 'X') return null;
            return new Node(val as string, buildTree(trees), buildTree(trees));
        };
        return buildTree(trees);
    };

    console.log(serialize(node));
    console.log(deserialize(serialize(node)));
    console.log(node.left?.left?.val);
    console.log(deserialize(serialize(node))?.left?.left?.val);

})();
