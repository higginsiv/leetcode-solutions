/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
    let max = -Infinity;
    let maxIndex;
    let second = -Infinity;
    nums.forEach((num, index) => {
        if (num > max) {
            second = max;
            max = num;
            maxIndex = index;
        } else if (num > second) {
            second = num;
        }
    });

    return max >= 2 * second ? maxIndex : -1;
};
