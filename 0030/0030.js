/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const wordLength = words[0].length;
    const subLength = wordLength * words.length;

    let wordCounts = new Map();
    words.forEach((w) => {
        wordCounts.set(w, (wordCounts.get(w) || 0) + 1);
    });

    let output = [];

    if (s.length < subLength) {
        return output;
    }

    outer: for (let i = 0; i < s.length - subLength + 1; i++) {
        let localWordCounts = new Map();
        for (let j = i; j < i + subLength; j += wordLength) {
            let word = s.substring(j, j + wordLength);
            if (!wordCounts.has(word)) {
                continue outer;
            }
            const count = (localWordCounts.get(word) || 0) + 1;
            if (count > wordCounts.get(word)) {
                continue outer;
            }
            localWordCounts.set(word, count);
        }

        output.push(i);
    }
    return output;
};
