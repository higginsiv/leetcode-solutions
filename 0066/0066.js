/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    let i = digits.length - 1;
    while (i >= 0) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i] !== 0) {
            return digits;
        }

        if (i === 0) {
            digits.unshift(1);
            return digits;
        }

        i--;
    }
};