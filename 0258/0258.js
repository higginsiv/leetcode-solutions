/**
 * @param {number} num
 * @return {number}
 */
// https://en.wikipedia.org/wiki/Digital_root
const addDigits = function (num) {
    return num === 0 ? 0 : 1 + ((num - 1) % 9);
};
