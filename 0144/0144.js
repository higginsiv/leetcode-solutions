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
 * @return {number[]}
 */
const preorderTraversal = function(root) {
    let traversal = [];

    const preorder = function(node) {
        if (node === null) {
            return;
        }
        traversal.push(node.val);
        preorder(node.left);
        preorder(node.right);
    };

    preorder(root);
    return traversal;
};