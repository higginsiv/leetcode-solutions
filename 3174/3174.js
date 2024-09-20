/**
 * @param {string} s
 * @return {string}
 */
const clearDigits = function(s) {
    let toClear = 0;
    let result = '';
    s = s.replace(/\d/g, '#');
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '#') {
            toClear++;
        } else if (toClear > 0) {
            toClear--;
        } else {
            result = s[i] + result;
        }
    }
    return result;
};