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
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
    const paths = [];
    if (root !== null) {
        traverse(root);
    }
    return paths;

    function traverse(node, path) {
        if (path == null) {
            path = `${node.val}`;
        } else {
            path = `${path}->${node.val}`;
        }

        if (node.right === null && node.left === null) {
            paths.push(path);
            return;
        }

        if (node.right !== null) {
            traverse(node.right, path);
        }

        if (node.left !== null) {
            traverse(node.left, path);
        }
    }
};
