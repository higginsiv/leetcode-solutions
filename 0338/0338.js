/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
    const ret = [0];
    for (let i = 1; i <= n; i++) {
        let ones = 0;
        let val = i;
        while (val > 0) {
            ones += val % 2;
            val = Math.floor(val / 2);
        }
        ret.push(ones);
    }
    return ret;
};
