/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const targetSum = (nums.length * (nums.length + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return targetSum - actualSum;
};