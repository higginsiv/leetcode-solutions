/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
const losingPlayer = function (x, y) {
    const turns = Math.min(x, Math.floor(y / 4));
    return turns % 2 === 0 ? 'Bob' : 'Alice';
};
