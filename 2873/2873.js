/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumTripletValue = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                max = Math.max((nums[i] - nums[j]) * nums[k], max);
            }
        }
    }
    return max;
};
