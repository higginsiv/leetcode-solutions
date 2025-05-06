/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function (s) {
    const charCodeA = 'a'.charCodeAt(0);
    for (let i = 10; i <= 26; i++) {
        s = s.replaceAll(`${i}#`, String.fromCharCode(charCodeA + i - 1));
    }

    for (let i = 1; i <= 9; i++) {
        s = s.replaceAll(`${i}`, String.fromCharCode(charCodeA + i - 1));
    }
    return s;
};
