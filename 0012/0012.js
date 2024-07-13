/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    const valueToSymbol = new Map([
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M'],
    ]);

    const values = Array.from(valueToSymbol.keys());

    let result = '';
    let currentValue = values.pop();

    while (num > 0) {
        if (num >= currentValue) {
            result += valueToSymbol.get(currentValue);
            num -= currentValue;
        } else {
            currentValue = values.pop();
        }
    }

    result = result.replaceAll('DCCCC', 'CM');
    result = result.replaceAll('CCCC', 'CD');
    result = result.replaceAll('LXXXX', 'XC');
    result = result.replaceAll('XXXX', 'XL');
    result = result.replaceAll('VIIII', 'IX');
    result = result.replaceAll('IIII', 'IV');
    return result;
};