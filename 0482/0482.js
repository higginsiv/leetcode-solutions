/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = function (s, k) {
    s = s.replaceAll('-', '');

    let count = 0;
    let processed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '-') {
            continue;
        }
        if (count === k) {
            processed = '-' + processed;
            count = 0;
        }
        processed = s[i].toUpperCase() + processed;
        count++;
    }

    return processed;
};
