/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    const rows = Array.from({ length: numRows }, () => []);
    let row = 0;
    let increment = -1;
    for (let i = 0; i < s.length; i++) {
        rows[row].push(s[i]);
        if (row === 0 || row === numRows - 1) {
            increment *= -1;
        }
        row += increment;
    }
    return rows.flat().join('');
};
