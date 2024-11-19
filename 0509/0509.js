/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
    let last = 0;
    let current = 1;
    let next;

    if (n === 0) {
        return last;
    }

    if (n === 1) {
        return current;
    }

    for (let i = 2; i <= n; i++) {
        next = current + last;
        last = current;
        current = next;
    }

    return current;
};
