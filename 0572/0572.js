/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
    if (root === null) {
        return false;
    }

    // Check if the current tree matches the subRoot
    if (isSameTree(root, subRoot)) {
        return true;
    }

    // Otherwise, check the left and right subtrees
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

/**
 * Helper function to check if two trees are identical
 * @param {TreeNode} tree1
 * @param {TreeNode} tree2
 * @return {boolean}
 */
function isSameTree(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
        return true;
    }

    if (tree1 === null || tree2 === null || tree1.val !== tree2.val) {
        return false;
    }

    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}