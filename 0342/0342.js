/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
    if (n <= 0) {
        return false;
    }
    return /^1(00)*$/.test(n.toString(2));
};
