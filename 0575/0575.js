/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function (candyType) {
    const types = new Set(candyType);
    const limit = candyType.length / 2;
    return limit <= types.size ? limit : types.size;
};
