/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    let high = x / 2 + 1;
    let low = 1;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        const square = mid * mid;

        if (square === x) {
            return mid;
        }

        if (square < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return high;
};
