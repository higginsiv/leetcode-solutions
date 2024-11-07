/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = function (nums) {
    const frequencies = new Map();
    nums.forEach((el) => {
        const frequency = frequencies.get(el) ?? 0;
        frequencies.set(el, frequency + 1);
    });

    return nums.sort((a, b) => {
        const difference = frequencies.get(a) - frequencies.get(b);
        return difference === 0 ? b - a : difference;
    });
};
