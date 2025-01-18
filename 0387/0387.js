/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    const cache = new Map();
    for (let i = 0; i < s.length; i++) {
        if (cache.get(s[i]) == null) {
            cache.set(s[i], 0);
        }
        cache.set(s[i], cache.get(s[i]) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (cache.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};

