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
var minDepth = function (root) {
    return min(root, 1);

    function min(node, depth) {
        if (node === null) {
            return null;
        }

        if (node.left === null && node.right === null) {
            return depth;
        }

        const leftDepth = min(node.left, depth + 1) || Infinity;
        const rightDepth = min(node.right, depth + 1) || Infinity;

        return Math.min(leftDepth, rightDepth);
    }
};
