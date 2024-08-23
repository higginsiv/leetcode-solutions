/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
    return parseInt(
        num
            .toString(2)
            .split('')
            .map((c) => (c === '1' ? '0' : '1'))
            .join(''),
        2
    );
};
