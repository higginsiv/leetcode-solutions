/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => b - a);

    return g.reduce((satisfied, current) => {
        while (s.length > 0) {
            let cookie = s.pop();
            if (cookie >= current) {
                return satisfied + 1;
            }
        }
        return satisfied;
    }, 0);
};
