/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
    let i = 0;

    while (i < nums.length) {
        if (nums[i] === i + 1) {
            i++;
            continue;
        }
        const current = nums[i]; //3
        const valAtCurrent = nums[current - 1]; // 2

        if (valAtCurrent != current) {
            nums[i] = valAtCurrent;
            nums[current - 1] = current;
        } else {
            i++;
        }
    }

    const output = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            output.push(i + 1);
        }
    }

    return output;
};
