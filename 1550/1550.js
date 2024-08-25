/**
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function (arr) {
    let consecutive = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            consecutive++;
            if (consecutive === 3) {
                return true;
            }
        } else {
            consecutive = 0;
        }
    }
    return false;
};
