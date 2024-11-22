/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
    if (n <= 2) {
        return 0;
    }
    const nums = Array(n).fill(true);
    nums[0] = false;
    nums[1] = false;

    let prime = 2;
    while (prime != -1) {
        for (let i = prime * 2; i < n; i += prime) {
            nums[i] = false;
        }

        prime = nums.findIndex((num, i) => num && i > prime && i * i < n);
    }
    return nums.filter((num) => num).length;
};
