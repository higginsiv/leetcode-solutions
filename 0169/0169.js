/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    // Boyer-Moore Voting Algorithm
    let candidate = null;
    let count = 0;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } else {
            count += num === candidate ? 1 : -1;
        }
    }

    // Typically you would loop back through the array to see if the majority element occurs more than n/2 times,
    // but the prompt guarantees that the majority element exists in the array.

    return candidate;
};