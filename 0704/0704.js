/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let high = nums.length - 1;
    let low = 0;

    while (low < high) {
        const middle = Math.floor((high + low) / 2);
        const midValue = nums[middle];

        if (midValue === target) {
            return middle;
        } else if (midValue > target) {
            high = middle - 1;
        } else if (midValue < target) {
            low = middle + 1;
        }
    }

    if (nums[low] === target) {
        return low;
    }

    return -1;
};
