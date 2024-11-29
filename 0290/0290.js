/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
    const keyToWord = new Map();
    const wordToKey = new Map();
    pattern = pattern.split('');
    s = s.split(' ');

    if (pattern.length !== s.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        const wordFromKey = keyToWord.get(pattern[i]);
        if (wordFromKey && wordFromKey !== s[i]) {
            return false;
        }

        const keyFromWord = wordToKey.get(s[i]);
        if (keyFromWord && keyFromWord !== pattern[i]) {
            return false;
        }

        keyToWord.set(pattern[i], s[i]);
        wordToKey.set(s[i], pattern[i]);
    }

    return true;
};
