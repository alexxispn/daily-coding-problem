"use strict";
(() => {
    var _a, _b, _c, _d, _e;
    class Node {
        constructor(val, left = null, right = null) {
            this.val = val;
            this.left = left;
            this.right = right;
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    const serialize = (node) => {
        if (!node)
            return 'X';
        return `${node.val} ${serialize(node.left)} ${serialize(node.right)}`;
    };
    const deserialize = (serialized) => {
        const nodes = serialized.split(' ');
        const buildNode = () => {
            const val = nodes.shift();
            if (val === 'X')
                return null;
            return new Node(val, buildNode(), buildNode());
        };
        return buildNode();
    };
    const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
    console.log(serialize(node));
    console.log(deserialize(serialize(node)));
    console.log((_b = (_a = node.left) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.val);
    if (((_e = (_d = (_c = deserialize(serialize(node))) === null || _c === void 0 ? void 0 : _c.left) === null || _d === void 0 ? void 0 : _d.left) === null || _e === void 0 ? void 0 : _e.val) === 'left.left') {
        console.log('Deserialized correctly');
    }
    else {
        console.log('Deserialized incorrectly');
    }
})();
