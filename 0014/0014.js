/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    strs = strs.sort();
    let longestCommon = '';
    const iterations = strs[0].length > strs[strs.length - 1].length ? strs[strs.length - 1].length : strs[0].length;

    for (let i = 0; i < iterations; i++) {
        if (strs[0][i] === strs[strs.length - 1][i]) {
            longestCommon += strs[0][i];
        } else {
            break;
        }
    }
    return longestCommon;
};