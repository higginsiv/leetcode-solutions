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
 * @return {boolean}
 */
const isBalanced = function (root) {
    function findDepths(node, depth) {
        if (!node) {
            return depth - 1;
        }

        const leftDepth = findDepths(node.left, depth + 1);
        const rightDepth = findDepths(node.right, depth + 1);

        if (leftDepth === false || rightDepth === false) {
            return false;
        }

        const depthUnbalanced = Math.abs(leftDepth - rightDepth) > 1;
        if (depthUnbalanced) {
            return false;
        }

        if (depth === 0 && !depthUnbalanced) {
            return true;
        }

        return Math.max(leftDepth, rightDepth);
    }

    return findDepths(root, 0);
};
