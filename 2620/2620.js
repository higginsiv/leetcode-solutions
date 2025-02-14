/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    let ret = n;
    return function () {
        return ret++;
    };
};
