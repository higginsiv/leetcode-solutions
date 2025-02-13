/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
    nums.sort((a, b) => b - a);

    let operations = 0;
    let low1 = nums[nums.length - 1];
    let low2 = nums[nums.length - 2];
    while (low1 < k) {
        const newValue = 2 * low1 + low2;

        nums.pop();
        nums.pop();
        insertInOrder(newValue);

        low1 = nums[nums.length - 1];
        low2 = nums[nums.length - 2];
        operations++;
    }

    return operations;

    function insertInOrder(val) {
        let low = 0;
        let high = nums.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (nums[mid] > val) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        nums.splice(low, 0, val);
    }
};
