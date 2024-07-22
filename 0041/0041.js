/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
    const length = nums.length;
    let i = 0;

    while (i < length) {
        const num = nums[i];

        if (nums[num - 1] !== num && num > 0 && num <= length) {
            [nums[i], nums[num - 1]] = [nums[num - 1], nums[i]];
        } else {
            i++;
        }
    }
    
    for (let i = 1; i <= length; i++) {
        if (nums[i - 1] !== i) {
            return i;
        }
    }
    return length + 1;
};
