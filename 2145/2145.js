/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    let min = 0;
    let max = 0;
    let x = 0;
    for (let i = 0; i < differences.length; i++) {
        x += differences[i];
        if (x > max) {
            max = x;
        } else if (x < min) {
            min = x;
        }
    }

    const candidate = upper - lower + 1 - (max - min);
    return candidate > 0 ? candidate : 0;
};
