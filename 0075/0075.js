/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    let reds = 0;
    let whites = 0;
    let blues = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            reds++;
        } else if (nums[i] === 1) {
            whites++;
        } else {
            blues++;
        }
    }

    let index = 0;
    while (reds > 0) {
        nums[index++] = 0;
        reds--;
    }
    while (whites > 0) {
        nums[index++] = 1;
        whites--;
    }
    while (blues > 0) {
        nums[index++] = 2;
        blues--;
    }
    return nums;
};
