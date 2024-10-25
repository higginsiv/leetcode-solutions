/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
    let max = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];

        if (current > max) {
            third = second;
            second = max;
            max = current;
            continue;
        } else if (current > second && current !== max) {
            third = second;
            second = current;
        } else if (current > third && current !== second && current !== max) {
            third = current;
        }
    }

    return third !== -Infinity ? third : max;
};
