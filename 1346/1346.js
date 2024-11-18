/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
    arr.sort((a, b) => Math.abs(a) - Math.abs(b));
    const doubles = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (doubles.has(arr[i])) {
            return true;
        }
        doubles.add(arr[i] * 2);
    }

    return false;
};
