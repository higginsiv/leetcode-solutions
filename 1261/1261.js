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
 */
var FindElements = function (root) {
    this.elements = new Set();
    root.val = 0;

    const traverse = (node) => {
        this.elements.add(node.val);
        if (node.left != null) {
            node.left.val = node.val * 2 + 1;
            traverse(node.left);
        }
        if (node.right != null) {
            node.right.val = node.val * 2 + 2;
            traverse(node.right);
        }
    };

    traverse(root);
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.elements.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
