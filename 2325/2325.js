/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = function (key, message) {
    const aCharCode = 'a'.charCodeAt(0);
    const translations = new Map();
    for (let i = 0; i < key.length; i++) {
        if (key[i] === ' ' || translations.get(key[i]) != null) {
            continue;
        }
        translations.set(key[i], aCharCode + translations.size);
    }

    return message
        .split('')
        .map((letter) => {
            if (letter === ' ') {
                return letter;
            }
            return String.fromCharCode(translations.get(letter));
        })
        .join('');
};
