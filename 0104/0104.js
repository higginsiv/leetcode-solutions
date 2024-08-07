/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    let stack = [{ node: root, depth: 1 }];
    let maxDepth = 0;

    while (stack.length > 0) {
        const { node, depth } = stack.pop();
        if (node === null) {
            maxDepth = Math.max(maxDepth, depth - 1);
            continue;
        }

        stack.push({ node: node.right, depth: depth + 1 });
        stack.push({ node: node.left, depth: depth + 1 });
    }
    return maxDepth;
};
