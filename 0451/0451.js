/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
    let frequencies = new Map();

    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        let frequency = frequencies.get(character) ?? 0;
        frequencies.set(character, frequency + 1);
    }

    const frequencyArray = Array.from(frequencies).sort((a, b) => {
        return b[1] - a[1];
    });

    return frequencyArray.reduce((total, current) => {
        return total + current[0].repeat(current[1]);
    }, '');
};
