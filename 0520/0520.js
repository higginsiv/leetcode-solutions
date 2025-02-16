/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
    const aCode = 'A'.charCodeAt(0);
    const zCode = 'Z'.charCodeAt(0);

    let lowercaseDetected = false;
    const firstCapital = isCapital(word.charCodeAt(0));
    let otherCapital = false;

    for (let i = 1; i < word.length; i++) {
        const cap = isCapital(word.charCodeAt(i));
        lowercaseDetected = lowercaseDetected || !cap;
        otherCapital = otherCapital || cap;

        if (lowercaseDetected && otherCapital) {
            return false;
        }

        if (!firstCapital && otherCapital) {
            return false;
        }
    }

    return true;

    function isCapital(code) {
        return code >= aCode && code <= zCode;
    }
};
