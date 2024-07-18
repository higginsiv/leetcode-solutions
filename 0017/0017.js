/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    const keyboard = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);

    function getCombos(index, prefix) {
        if (index === digits.length) {
            result.push(prefix);
            return;
        }

        const digit = digits[index];
        const letters = keyboard.get(digit);
        for (const letter of letters) {
            getCombos(index + 1, prefix + letter);
        }
    }

    const result = [];
    getCombos(0, digits ? '' : undefined);
    return digits ? result : [];
};
