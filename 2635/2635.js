/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
    const ret = [];
    for (let i = 0; i < arr.length; i++) {
        ret.push(fn(arr[i], i));
    }
    return ret;
};
