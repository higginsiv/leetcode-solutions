/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const unique = new Map();
    s1 = s1.split(' ');
    s2 = s2.split(' ');

    for (const word of s1) {
        unique.set(word, (unique.get(word) || 0) + 1)
    }

    for (const word of s2) {
        unique.set(word, (unique.get(word) || 0) + 1)
    }

    return Array.from(unique.keys()).filter((key) => unique.get(key) === 1);
};