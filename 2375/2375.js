/**
 * @param {string} pattern
 * @return {string}
 */
const smallestNumber = function (pattern) {
    for (let i = 1; i < 10; i++) {
        const result = smallest(pattern, i.toString());
        if (result) {
            return result;
        }
    }

    function smallest(pattern, current) {
        if (pattern === '') {
            return current;
        }

        const firstChar = pattern[0];
        pattern = pattern.slice(1);
        let min;
        let max;

        if (firstChar === 'I') {
            min = parseInt(current[current.length - 1]) + 1;
            max = 9;
        } else {
            min = 1;
            max = parseInt(current[current.length - 1]) - 1;
        }

        for (let i = min; i <= max; i++) {
            if (current.indexOf(i.toString()) !== -1) {
                continue;
            }
            const result = smallest(pattern, current + i);

            if (result) {
                return result;
            }
        }

        return false;
    }
};

console.log(smallestNumber("IIIDIDDD"));