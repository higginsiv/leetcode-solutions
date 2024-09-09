/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
    const numToIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numToIndex.has(nums[i]) && i - numToIndex.get(nums[i]) <= k) {
            return true;
        }
        numToIndex.set(nums[i], i);
    }
    return false;
};
