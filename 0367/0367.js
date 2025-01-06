/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
    let low = 1;
    let high = Math.ceil(num / 2);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let midSquared = mid * mid;

        if (midSquared === num) {
            return true;
        }

        if (midSquared > num) {
            high = mid;
        }

        if (midSquared < num) {
            low = mid + 1;
        }
    }
    return high * high === num;
};
