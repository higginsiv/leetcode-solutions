/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    if (target < nums[0] || target > nums[nums.length - 1]) {
        return [-1, -1];
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            left = mid;
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (nums[left] !== target) {
        return [-1, -1];
    }

    while (nums[left - 1] === target) {
        left--;
    }
    while (nums[right + 1] === target) {
        right++;
    }

    return [left, right];
};
