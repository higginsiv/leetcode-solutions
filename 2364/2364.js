/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
    let map = new Map();
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let diff = nums[i] - i;
        if (map.has(diff)) {
            count += map.get(diff);
        }
        map.set(diff, (map.get(diff) || 0) + 1);
    }

    return (n * (n - 1)) / 2 - count;
};
