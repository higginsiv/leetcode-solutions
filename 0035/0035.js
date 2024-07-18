/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    if (target < nums[0]) {
        return 0;
    } else if (target > nums[nums.length - 1]) {
        return nums.length;
    }

    let index = nums.length / 2 | 0;
    let lowest = 0;
    let highest = nums.length;
    while (lowest < highest) {
        let current = nums[index];
        if (current === target) {
            return index;
        } else if (current < target) {
            lowest = index;
            index = (index + highest) / 2 | 0;
            if (index === lowest) {
                return index + 1;
            }
        } else {
            highest = index;
            index = (index + lowest) / 2 | 0;
            if (index === highest) {
                return index + 1;
            }
        }
    }

    return index;
};