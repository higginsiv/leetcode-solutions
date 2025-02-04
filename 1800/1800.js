/**
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function (nums) {
    let maxSum = -Infinity;
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentSum += nums[i];
        } else {
            maxSum = Math.max(maxSum, currentSum);
            currentSum = nums[i];
        }
    }
    return Math.max(maxSum, currentSum);
};
