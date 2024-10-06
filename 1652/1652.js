/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
    if (k === 0) {
        return Array(code.length).fill(0);
    }

    let result = [];
    for (let i = 0; i < code.length; i++) {
        let sum = 0;
        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % code.length];
            }
        } else {
            for (let j = -1; j >= k; j--) {
                sum += code[(i + j + code.length) % code.length];
            }
        }
        result.push(sum);
    }
    return result;
};
