/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    let pairs = 0;
    nums.sort((a, b) => a - b);
    let left = nums.length - 1;
    let right = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        const lowest = lower - nums[i];
        const highest = upper - nums[i];

        while (highest < nums[right] && right > i) {
            right--;
        }

        while (lowest <= nums[left] && left > i) {
            left--;
        }

        left++;

        if (left > right) {
            left = right;
        }

        if (
            right >= left &&
            right > i &&
            nums[i] + nums[left] >= lower &&
            nums[i] + nums[right] <= upper
        ) {
            pairs += right - left + 1;
        }
    }

    return pairs;
};
