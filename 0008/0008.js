/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    let integer = parseInt(s);
    if (isNaN(integer)) {
        return 0;
    }
    if (integer < -(2 ** 31)) {
        return -(2 ** 31);
    }
    if (integer > 2 ** 31 - 1) {
        return 2 ** 31 - 1;
    }
    return integer;
};