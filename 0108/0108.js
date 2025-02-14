/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null;
    }
    const middleIndex = Math.floor(nums.length / 2);
    return {
        val: nums[middleIndex],
        left: sortedArrayToBST(nums.slice(0, middleIndex)),
        right: sortedArrayToBST(nums.slice(middleIndex + 1)),
    };
};
