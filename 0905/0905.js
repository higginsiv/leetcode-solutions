/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = function(nums) {
    return nums.sort((a, b) => {
        return a % 2 - b % 2;
    })
};