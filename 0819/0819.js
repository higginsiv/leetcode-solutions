/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function (paragraph, banned) {
    const count = new Map();
    let highWord;
    let highCount = 0;
    paragraph
        .replace(/[!?'",;.]/g, ' ')
        .toLowerCase()
        .split(/\s+/)
        .forEach((word) => {
            if (banned.includes(word)) {
                return;
            }
            let wordCount = count.get(word) ?? 0;
            wordCount++;
            count.set(word, wordCount);

            if (wordCount > highCount) {
                highCount = wordCount;
                highWord = word;
            }
        });

    return highWord;
};
