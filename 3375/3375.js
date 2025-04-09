/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
    nums = [...new Set(nums)];
    nums.sort((a, b) => a - b);

    if (nums[0] < k) {
        return -1;
    }

    if (nums[0] === k) {
        return nums.length - 1;
    }

    return nums.length;
};
