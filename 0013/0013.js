/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanToIntMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    const roman = s.split('');
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanToIntMap.get(roman[i]);
        const next = romanToIntMap.get(roman[i + 1]);
        if (current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
};