/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    const magFrequencies = new Map();
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];
        const charFrequency = magFrequencies.get(char) ?? 0;
        magFrequencies.set(char, charFrequency + 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i];
        const charFrequency = magFrequencies.get(char) ?? 0;
        if (charFrequency < 1) {
            return false;
        }
        magFrequencies.set(char, charFrequency - 1);
    }
    return true;
};
