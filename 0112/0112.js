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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
    function traversal(node, targetSum, sum) {
        if (node === null) {
            return false;
        }
        sum += node.val;
        if (node.left === null && node.right === null) {
            return sum === targetSum;
        }
        return (
            traversal(node.left, targetSum, sum) ||
            traversal(node.right, targetSum, sum)
        );
    }

    return traversal(root, targetSum, 0);
};
