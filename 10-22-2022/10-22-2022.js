"use strict";
(() => {
    var _a, _b, _c, _d, _e;
    class Node {
        constructor(val, left = null, right = null) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
    const serialize = (node) => {
        if (node === null)
            return 'X';
        return `${node.val} ${serialize(node.left)} ${serialize(node.right)}`;
    };
    const deserialize = (serialized) => {
        if (serialized === 'X')
            return null;
        const trees = serialized.split(' ');
        const buildTree = (trees) => {
            const val = trees.shift();
            if (val === 'X')
                return null;
            return new Node(val, buildTree(trees), buildTree(trees));
        };
        return buildTree(trees);
    };
    console.log(serialize(node));
    console.log(deserialize(serialize(node)));
    console.log((_b = (_a = node.left) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.val);
    console.log((_e = (_d = (_c = deserialize(serialize(node))) === null || _c === void 0 ? void 0 : _c.left) === null || _d === void 0 ? void 0 : _d.left) === null || _e === void 0 ? void 0 : _e.val);
})();
