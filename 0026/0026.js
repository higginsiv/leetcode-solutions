/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let displacement = 0;
    let i = 1;
    while (i < nums.length) {
        if (nums[i] === nums[i - 1 - displacement]) {
            nums[i] = undefined;
            displacement++;
        } else {
            nums[i - displacement] = nums[i];
        }
        i++;
    }
    return nums.length - displacement;
};
