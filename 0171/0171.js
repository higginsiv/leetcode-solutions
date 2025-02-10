/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
    let col = 0;
    let mult = 1;
    const aRef = 'A'.charCodeAt(0);

    for (let i = columnTitle.length - 1; i >= 0; i--) {
        col += mult * (columnTitle.charCodeAt(i) - aRef + 1);
        mult *= 26;
    }
    return col;
};
