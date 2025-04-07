/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
    const totalSum = nums.reduce((total, curr) => total + curr);

    if (totalSum % 2 !== 0) {
        return false;
    }

    const targetSum = totalSum / 2;

    const memo = new Map();

    return canPartitionRecursive(0, 0);

    function canPartitionRecursive(index, currentSum) {
        if (currentSum > targetSum) {
            return false;
        }

        if (currentSum === targetSum) {
            return true;
        }

        if (index >= nums.length) {
            return false;
        }

        const memoKey = `${index}-${currentSum}`;
        if (memo.has(memoKey)) {
            return memo.get(memoKey);
        }

        const include = canPartitionRecursive(
            index + 1,
            currentSum + nums[index]
        );

        const exclude = canPartitionRecursive(index + 1, currentSum);

        const result = include || exclude;
        memo.set(memoKey, result);

        return result;
    }
};
