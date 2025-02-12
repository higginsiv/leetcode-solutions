/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumSum = function (nums) {
    const sumsToNums = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        let numsThatMakeSum = sumsToNums.get(sum) || [];
        numsThatMakeSum.push(nums[i]);
        sumsToNums.set(sum, numsThatMakeSum);
    }

    let maxSum = -1;
    sumsToNums.forEach((numsList) => {
        if (numsList.length > 1) {
            numsList.sort((a, b) => b - a);
            maxSum = Math.max(maxSum, numsList[0] + numsList[1]);
        }
    });

    return maxSum;
};
