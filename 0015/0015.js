/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const results = new Set();
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                results.add(`${nums[i]},${nums[left]},${nums[right]}`);
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return results ? Array.from(results).map(result => result.split(',').map(num => parseInt(num))) : [];
};
