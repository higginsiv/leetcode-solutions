/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    const reversed = parseInt(x.toString().split('').reverse().join(''));
    return (reversed > 2 ** 31 - 1) ? 0 : reversed * Math.sign(x);
};