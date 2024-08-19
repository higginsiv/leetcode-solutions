/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    let visited = new Set();
    while (n !== 1 && !visited.has(n)) {
        visited.add(n);
        n = n
            .toString()
            .split('')
            .reduce((total, num) => total + Math.pow(num, 2), 0);
    }
    return n === 1;
};
