/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = function (widths, s) {
    const aPos = 'a'.charCodeAt(0);
    let lines = 1;
    let width = 0;

    for (let i = 0; i < s.length; i++) {
        const charWidth = widths[s[i].charCodeAt(0) - aPos];
        if (width + charWidth > 100) {
            lines++;
            width = charWidth;
            continue;
        }
        width += charWidth;
    }
    return [lines, width];
};
