/**
 * @param {number} n
 * @return {number}
 */
const countGoodNumbers = function (n) {
    n = BigInt(n)
    const MOD = 10n ** 9n + 7n;

    const evenNumbers = n % 2n === 0n ? n / 2n : (n + 1n) / 2n;
    const oddNumbers = n - evenNumbers

    return Number(((5n ** evenNumbers % MOD) * (4n ** oddNumbers % MOD)) % MOD);
};
