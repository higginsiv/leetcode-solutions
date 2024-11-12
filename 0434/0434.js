/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function (s) {
    if (s.length === 0) {
        return 0;
    }
    return s.split(/\s+/).filter((segment) => segment.length > 0).length;
};
