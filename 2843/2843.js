/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let symmetric = 0;
    for (let i = low; i <= high; i++) {
        const numStr = i.toString();
        if (numStr.length % 2 != 0) {
            continue;
        }

        const sum1 = numStr
            .substring(0, numStr.length / 2)
            .split('')
            .reduce((total, curr) => total + parseInt(curr), 0);

        const sum2 = numStr
            .substring(numStr.length / 2)
            .split('')
            .reduce((total, curr) => total + parseInt(curr), 0);

        if (sum1 === sum2) {
            symmetric++;
        }
    }

    return symmetric;
};
