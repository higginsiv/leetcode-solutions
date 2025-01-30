/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
    const valToLetter = new Map();

    for (let i = 0; i < 26; i++) {
        valToLetter.set(i + 1, String.fromCharCode(65 + i));
    }

    let title = '';
    const base = 26;

    while (columnNumber > 0) {
        if (columnNumber <= base) {
            title = valToLetter.get(columnNumber) + title;
            break;
        }

        const remainder = columnNumber % base;
        if (remainder === 0) {
            remainder = 26;
        }
        const quotient = Math.floor(columnNumber / base);

        title = valToLetter.get(remainder) + title;
        columnNumber = quotient;
    }

    return title;
};
