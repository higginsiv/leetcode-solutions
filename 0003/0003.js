/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let startIndex = 0;
    let currentIndex = 0;
    let maxLength = 0;
    let charMap = new Map();

    while (currentIndex < s.length) {
        const currentChar = s[currentIndex];
        if (charMap.has(currentChar)) {
            startIndex = Math.max(startIndex, charMap.get(currentChar) + 1);
        }
        charMap.set(currentChar, currentIndex);
        maxLength = Math.max(maxLength, currentIndex - startIndex + 1);
        currentIndex++;
    }
    return maxLength;
};