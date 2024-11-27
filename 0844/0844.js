/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
    const BACKSPACE = '#';
    let tIndex = t.length - 1;
    let sIndex = s.length - 1;

    let newT = '';
    let newS = '';
    let tSkip = 0;
    let sSkip = 0;
    while (tIndex >= 0) {
        let tChar = t[tIndex];
        if (tChar === BACKSPACE) {
            tIndex--;
            tSkip++;
        } else if (tSkip > 0) {
            tIndex--;
            tSkip--;
        } else {
            newT += tChar;
            tIndex--;
        }
    }

    while (sIndex >= 0) {
        let sChar = s[sIndex];
        if (sChar === BACKSPACE) {
            sIndex--;
            sSkip++;
        } else if (sSkip > 0) {
            sIndex--;
            sSkip--;
        } else {
            newS += sChar;
            sIndex--;
        }
    }

    return newS == newT;
};
