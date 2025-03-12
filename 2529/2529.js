/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = function(nums) {
    let negativeCount = 0;
    let positiveCount = 0;

    for (const num of nums) {
        if (num < 0) {
            negativeCount++;
        } else if (num > 0) {
            positiveCount++;
        }
    }

    return Math.max(negativeCount, positiveCount);  
};