/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
    const answer = [];
    const numSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (numSet.has(nums[i])) {
            answer[0] = nums[i];
        } else {
            numSet.add(nums[i]);
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!numSet.has(i)) {
            answer[1] = i;
            break;
        }
    }

    return answer;
};
