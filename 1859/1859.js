/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = function (s) {
    return s
        .split(' ')
        .map((x) => x.match(/([a-zA-Z]+)(\d+)/).slice(1))
        .sort((a, b) => a[1] - b[1])
        .map((x) => x[0])
        .join(' ');
};
