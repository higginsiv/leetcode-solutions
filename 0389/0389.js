/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
    return String.fromCharCode(
        t.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) -
            s.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
    );
};
