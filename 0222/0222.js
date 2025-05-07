/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function(root) {
    if (root === null) {
        return 0;
    }

    let leftHeight = 0;
    let rightHeight = 0;
    let leftNode = root;
    let rightNode = root;

    // Calculate the height of the leftmost path
    while (leftNode !== null) {
        leftHeight++;
        leftNode = leftNode.left;
    }

    // Calculate the height of the rightmost path
    while (rightNode !== null) {
        rightHeight++;
        rightNode = rightNode.right;
    }

    // If the left and right heights are the same, the tree is a perfect binary tree
    if (leftHeight === rightHeight) {
        return 2 ** leftHeight - 1;
    }

    // Otherwise, recursively count the nodes in the left and right subtrees
    return 1 + countNodes(root.left) + countNodes(root.right);
};