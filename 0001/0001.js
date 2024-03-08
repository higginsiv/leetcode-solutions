/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num);
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        const sum = nums[i].num + nums[j].num;
        if (sum === target) {
            return [nums[i].index, nums[j].index];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
};