/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    let cache = new Map();
    function climb(n) {
        if (n === 1 || n === 0) {
            return 1;
        }
        if (!cache.has(n)) {
            cache.set(n, climb(n - 1) + climb(n - 2));
        }
        return cache.get(n);
    }
    return climb(n);
};
