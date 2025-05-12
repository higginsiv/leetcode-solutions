/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
    let index = 0;
    let retS = '';

    while (index < s.length) {
        const reversed = s
            .slice(index, index + k)
            .split('')
            .reverse()
            .join('');
            
        const original = s.slice(index + k, index + 2 * k);

        retS += reversed;
        retS += original;
        index += 2 * k;
    }

    return retS;
};
