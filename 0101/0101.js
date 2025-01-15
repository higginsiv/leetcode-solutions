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
const isSymmetric = function (root) {
    let nodesToCompare = [root.left, root.right];
    while (nodesToCompare.length > 0) {
        let left = 0;
        let right = nodesToCompare.length - 1;
        while (left < right) {
            if (nodesToCompare[left]?.val != nodesToCompare[right]?.val) {
                return false;
            }
            left++;
            right--;
        }
        let newNodesToCompare = [];
        nodesToCompare.forEach((node) => {
            if (node == null) {
                return;
            }
            newNodesToCompare.push(node.left);
            newNodesToCompare.push(node.right);
        });
        nodesToCompare = newNodesToCompare;
    }
    return true;
};
