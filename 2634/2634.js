/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
    const ret = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            ret.push(arr[i]);
        }
    }
    return ret;
};
