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
const sumOfLeftLeaves = function (root) {
    function traverse(node, sum, isLeft) {
        if (node.left == null && node.right == null && isLeft) {
            return sum + node.val;
        }

        if (node.left != null) {
            sum = traverse(node.left, sum, true);
        }

        if (node.right != null) {
            sum = traverse(node.right, sum, false);
        }

        return sum;
    }

    return traverse(root, 0);
};
