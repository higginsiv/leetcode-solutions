/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
    return heights
        .toSorted((a, b) => a - b)
        .reduce((wrong, curr, index) => {
            if (curr != heights[index]) {
                return wrong + 1;
            }
            return wrong;
        }, 0);
};
