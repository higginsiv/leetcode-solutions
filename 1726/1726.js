/**
 * @param {number[]} nums
 * @return {number}
 */
const tupleSameProduct = function (nums) {
    const products = new Map();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const num1 = nums[i];
            const num2 = nums[j];
            if (num1 === num2) {
                continue;
            }
            const product = num1 * num2;
            const frequency = products.get(product) ?? 0;
            products.set(product, frequency + 1);
        }
    }

    let count = 0;
    products.forEach((frequency) => {
        if (frequency > 1) {
            count += ((frequency * (frequency - 1)) / 2) * 8;
        }
    });

    return count;
};
