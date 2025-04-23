/**
 * @param {number} n
 * @return {number}
 */
const countLargestGroup = function (n) {
    const sums = new Map();

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        sums.set(sum, (sums.get(sum) ?? 0) + 1);
    }

    const largestGroupSize = Math.max(...sums.values());
    return [...sums.values()].filter((size) => size === largestGroupSize)
        .length;
};
