/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isArraySpecial = function (nums) {
    let last = nums[0] % 2;
    for (let i = 1; i < nums.length; i++) {
        const temp = nums[i] % 2;
        if (last === temp) {
            return false;
        }
        last = temp;
    }
    return true;
};
