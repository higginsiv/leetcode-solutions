/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function (n) {
    return n
        .toString(2)
        .split('')
        .filter((x) => x === '1').length;
};
