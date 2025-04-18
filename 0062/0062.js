/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
    const cache = Array.from({ length: m }, () => Array(n).fill(-1));

    return getUniquePaths(m - 1, n - 1);

    function getUniquePaths(m, n) {
        if (m < 0 || n < 0) {
            return 0;
        }

        if (cache[m][n] !== -1) {
            return cache[m][n];
        }

        if (m === 0 && n === 0) {
            return 1;
        }

        const paths = getUniquePaths(m - 1, n) + getUniquePaths(m, n - 1);
        cache[m][n] = paths;

        return paths;
    }
};
