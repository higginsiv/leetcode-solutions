/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let numZeroes = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            numZeroes++;
            continue;
        }
        nums[i - numZeroes] = nums[i];
    }

    for (let i = 1; i <= numZeroes; i++) {
        nums[nums.length - i] = 0;
    }
    return nums;
};
