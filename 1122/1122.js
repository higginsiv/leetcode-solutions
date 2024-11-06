/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {
    return arr1.sort((a, b) => {
        const aIndex = arr2.indexOf(a);
        const bIndex = arr2.indexOf(b);

        if (aIndex < 0 && bIndex < 0) {
            return a - b;
        }

        if (aIndex < 0 && bIndex >= 0) {
            return 1;
        }

        if (bIndex < 0 && aIndex >= 0) {
            return -1;
        }

        return aIndex - bIndex;
    });
};
