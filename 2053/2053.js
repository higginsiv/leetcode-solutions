/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = function (arr, k) {
    return (
        arr.filter(
            (element, index) =>
                arr.indexOf(element) === index &&
                arr.indexOf(element, index + 1) === -1
        )[k - 1] ?? ''
    );
};
