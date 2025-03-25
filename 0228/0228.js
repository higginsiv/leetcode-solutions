/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
    const ranges = [];

    let start = nums[0];
    let last = start;

    for (let i = 1; i <= nums.length; i++) {
        const current = nums[i] ?? null;
        if (current === last + 1) {
            last = current;
            continue;
        } else if (start === last) {
            ranges.push(`${start}`);
        } else {
            ranges.push(`${start}->${last}`);
        }
        start = current;
        last = current;
    }
    return ranges;
};
