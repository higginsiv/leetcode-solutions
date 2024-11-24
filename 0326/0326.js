/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
    if (n < 1) {
        return false;
    }

    let pow = 1;

    while (pow < n) {
        pow *= 3;
    }

    return pow === n;
};
