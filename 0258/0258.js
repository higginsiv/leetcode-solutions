/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
    return num === 0 ? 0 : 1 + ((num - 1) % 9);
};
