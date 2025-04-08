/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumOperations = function (nums) {
    const visited = new Map();
    let furthestCopy = -1;

    for (let i = 0; i < nums.length; i++) {
        const previousIndex = visited.get(nums[i]);
        if (previousIndex != null && previousIndex > furthestCopy) {
            furthestCopy = previousIndex;
        }
        visited.set(nums[i], i);
    }

    return furthestCopy !== -1 ? Math.ceil((furthestCopy + 1) / 3) : 0;
};
