/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    const optionA =
        nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
    const optionB = nums[0] * nums[1] * nums[nums.length - 1];
    return Math.max(optionA, optionB);
};
