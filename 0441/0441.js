/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
    return Math.floor((Math.sqrt(1 + 8 * n) - 1) / 2);
};
